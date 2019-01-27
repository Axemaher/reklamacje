import React from 'react';
import { uuidv4 } from 'uuid/v4'


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
        history: [
        ],
        id: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let stateCopy = this.state;
        let currentDate = new Date();
        let day = currentDate.getDate();
        day = day < 9 ? `0${day}` : day;
        let month = currentDate.getMonth() + 1;
        month = month < 9 ? `0${month}` : month;
        const year = currentDate.getFullYear();
        const reclamationNumber = 1;
        let date = `${day}:${month}:${year}`;


        stateCopy.reclamation.number = `RK ${reclamationNumber}/${year}`;
        stateCopy.reclamation.addDate = date;
        stateCopy.history.push(
            {
                desc: "Reklamacja wprowadzona do systemu",
                stateCopy: date
            });
        const id = require('uuid/v4');
        stateCopy.id = id();
        console.log("added")
        console.log(stateCopy)
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
                    <fieldset name="reclamation">
                        <legend>Reklamacja</legend>
                        <label>
                            reklamacja gwarancyjna?
                <input type="checkbox" name="warranty" onChange={this.handleChangeReclamation} checked={this.state.reclamation.warranty} />
                        </label> <br />
                        <label>
                            Producent:
                <input type="text" name="manufacturer" onChange={this.handleChangeReclamation} value={this.state.reclamation.manufacturer} />
                        </label> <br />
                        <label>
                            Model:
                <input type="text" name="model" onChange={this.handleChangeReclamation} value={this.state.reclamation.model} />
                        </label> <br />
                        <label>
                            Opis usterki:
                <textarea type="text" name="problemDesc" onChange={this.handleChangeReclamation} value={this.state.reclamation.problemDesc} />
                        </label> <br />
                    </fieldset>


                    <fieldset name="client">
                        <legend>Klient</legend>
                        <label>
                            Firma?
                <input type="checkbox" name="company" onChange={this.handleChangeClient} checked={this.state.reclamation.company} />
                        </label> <br />
                        {this.state.client.company ?
                            <React.Fragment>
                                <label>
                                    NIP:
                  <input type="text" name="nip" onChange={this.handleChangeClient} value={this.state.client.nip} />
                                </label> <br />
                            </React.Fragment>
                            : null
                        }
                        <label>
                            Nazwa:
                <input type="text" name="name" onChange={this.handleChangeClient} value={this.state.client.name} />
                        </label> <br />
                        <label>
                            Nick:
                <input type="text" name="nick" onChange={this.handleChangeClient} value={this.state.client.nick} />
                        </label> <br />
                        <label>
                            Telefon:
                <input type="text" name="tel" onChange={this.handleChangeClient} value={this.state.client.tel} />
                        </label> <br />
                        <label>
                            Email:
                <input type="email" name="mail" onChange={this.handleChangeClient} value={this.state.client.mail} />
                        </label> <br />
                    </fieldset>


                    <fieldset name="informations">
                        <legend>Notatki</legend>
                        <label>
                            Informacje dodatkowe:
                <textarea type="text" name="note" onChange={this.handleChangeInformations} value={this.state.informations.note} />
                        </label> <br />
                        <label>
                            notatki:
                <textarea type="text" name="other" onChange={this.handleChangeInformations} value={this.state.informations.other} />
                        </label> <br />
                    </fieldset>

                    <input type="submit" value="Dodaj reklamację" />
                </form>

                <br />
                <br />
                <br />

            </React.Fragment>
        )
    }
}

export default AddReclamation;