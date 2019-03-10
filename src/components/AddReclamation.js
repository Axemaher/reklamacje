import React from 'react';
import uuid from 'uuid';
import { CurrentDate } from './CurrentDate'
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';
import { Link } from 'react-router-dom'


class AddReclamation extends React.Component {
    state = {
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
        id: ""
    }

    handleSave = (e) => {
        let stateCopy = this.state;
        let reclamationNumber = null
        if (isNaN(this.props.reclamationCounter)) {
            reclamationNumber = 1;
        } else {
            reclamationNumber = this.props.reclamationCounter + 1;
        }
        stateCopy.reclamation.number = `RK ${reclamationNumber}/${CurrentDate("year")}`;
        stateCopy.reclamation.addDate = CurrentDate("full date");
        stateCopy.history.push(
            {
                desc: "Wprowadzono do systemu",
                date: CurrentDate("full date")
            });
        stateCopy.id = uuid.v4();
        this.props.handleAdd(stateCopy)
    }
    handleChangeReclamation = (e) => {
        if (e.target.name === "warranty") {
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

    handleChangeClient = (e) => {
        if (e.target.name === "company") {
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

    handleChangeInformations = (e) => {
        this.setState({
            informations: {
                ...this.state.informations, [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (

            // <form onSubmit={this.handleSubmit}>
            <form>
                <div className="addForm">
                    <ReclamationForm
                        change={this.handleChangeReclamation}
                        value={this.state.reclamation}
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
                    <Link className="btn btn-save" onClick={this.handleSave} to="/">Dodaj</Link>
                </div>
                {/* <button className="btn btn-save" type="submit" >Dodaj</button></div> */}
            </form>

        )
    }
}

export default AddReclamation;