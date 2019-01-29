import React from 'react';
import uuid from 'uuid';
import { CurrentDate } from './CurrentDate'
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';


class AddReclamation extends React.Component {
    state = {
        reclamation: {
            number: "",
            addDate: "",
            warranty: true,
            manufacturer: "",
            model: "",
            problemDesc: "",
            ended: false
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

    handleSubmit = (e) => {
        e.preventDefault();
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
                desc: "Reklamacja wprowadzona do systemu",
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
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
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
                    <input type="submit" value="Dodaj reklamację" />
                </form>
            </React.Fragment>
        )
    }
}

export default AddReclamation;