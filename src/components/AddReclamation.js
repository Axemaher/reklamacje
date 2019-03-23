import React, { Component } from 'react';
import uuid from 'uuid';
import { CurrentDate } from './CurrentDate'
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';
import { Redirect } from 'react-router-dom'



class AddReclamation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reclamation: {
                number: "",
                addDate: "",
                warranty: true,
                manufacturer: "",
                model: "",
                problemDesc: "",
                ended: false,
                sellNumber: ""
            },
            client: {
                company: false,
                nip: "",
                name: "",
                nick: "",
                tel: "",
                mail: ""
            },
            informations: {
                note: "",
                other: ""
            },
            history: [],
            id: "",
            redirect: false
        }
    }

    handleSave = () => {
        const now = new Date();
        let stateCopy = { ...this.state };
        delete stateCopy.redirect;
        let reclamationNumber = null
        if (isNaN(this.props.reclamationCounter)) {
            reclamationNumber = 1;
        } else {
            reclamationNumber = this.props.reclamationCounter + 1;
        }
        stateCopy.reclamation.number = `RK ${reclamationNumber}/${CurrentDate("year")}`;
        stateCopy.reclamation.addDate = {
            stringFormat: CurrentDate("full date"),
            dateTime: now.getTime()
        };
        stateCopy.history.push(
            {
                desc: "Wprowadzono do systemu",
                date: CurrentDate("full date")
            });
        stateCopy.id = uuid.v4();
        this.props.handleAdd(stateCopy)
        this.setState({ redirect: true })
    }
    handleChangeReclamation = e => {
        if (e.target.type === "checkbox") {
            this.setState({
                reclamation: {
                    ...this.state.reclamation, [e.target.name]: e.target.checked
                }
            })
        } else {
            this.setState({
                reclamation: {
                    ...this.state.reclamation, [e.target.name]: e.target.value
                }
            })
        }
    }

    handleChangeClient = e => {
        if (e.target.type === "checkbox") {
            this.setState({
                client: {
                    ...this.state.client, [e.target.name]: e.target.checked
                }
            })
        } else {
            this.setState({
                client: {
                    ...this.state.client, [e.target.name]: e.target.value
                }
            })
        }
    }

    handleChangeInformations = e => {
        this.setState({
            informations: {
                ...this.state.informations, [e.target.name]: e.target.value
            }
        })
    }
    handleChange = e => {
        console.log(e.taget.name)
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSave}>
                    <div className="addForm">
                        <ReclamationForm
                            change={this.handleChangeReclamation}
                            value={this.state.reclamation}
                            handleChangeReclamation={this.handleChangeReclamation}
                            formForEdit={false}
                        />

                        <ClientForm
                            change={this.handleChangeClient}
                            value={this.state.client}
                        />

                        <InformationsForm
                            change={this.handleChangeInformations}
                            value={this.state.informations}
                        />
                    </div>
                    <div className="save-container">
                        <button type="submit" className="btn btn-save">Dodaj</button>
                    </div>
                </form>
                {this.state.redirect && <Redirect to='/' />}
            </>
        )
    }
}

export default AddReclamation;