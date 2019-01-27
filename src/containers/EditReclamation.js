import React, { Component } from 'react';
// class EditReclamation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: {}
//         }
//         this.id = this.props.match.params.id;
//         this.stateFromProps = this.props.content.filter(el => el.id === this.id)[0];

//     }
//     handleChange = (e) => {
//         this.setState({
//             content: {
//                 ...this.state.content, [e.target.name]: e.target.value
//             }
//         })
//     }
//     componentWillMount() {
//         this.setState({
//             content: this.stateFromProps
//         })
//         console.log(this.stateFromProps)
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const editedData = this.state.content;
//         this.props.handleEdit(editedData);

//     }
//     render() {
//         console.log(this.state.content)
//         return (
//             <>
//                 {/* <form onSubmit={this.handleSubmit}>
//                     <label>
//                         name:
//                     <input
//                             type="text"
//                             value={this.state.content.name}
//                             name="name"
//                             onChange={this.handleChange} />
//                     </label><br />
//                     <label>
//                         sex:
//                     <input
//                             type="text"
//                             name="sex"
//                             value={this.state.content.sex}
//                             onChange={this.handleChange} />
//                     </label><br />
//                     <input type="submit" value="save" />
//                 </form> */}
//             </>
//         );
//     }
// }

// export default EditReclamation;



class EditReclamation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}


    }

    componentWillMount() {
        const id = this.props.match.params.id;
        const edited = this.props.content.filter(el => el.id === id)[0]
        console.log(edited)
        this.setState({
            reclamation: edited.reclamation,
            client: edited.client,
            id: edited.id,
            informations: edited.informations,
            history: edited.history

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let newData = this.state;
        newData.history.push(
            {
                desc: "Reklamacja wprowadzona do systemu",
                newData: "date"
            });

        console.log("edited")
        console.log(newData)
        this.props.handleEdit(newData)
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
    handleChangeAction = (e) => {

    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <fieldset name="reclamation">
                        <legend>Reklamacja</legend>
                        <label>Numer: {this.state.reclamation.number}</label><br />
                        <label>Data dodania: {this.state.reclamation.addDate}</label><br />
                        <label>Status: {this.state.reclamation.ended ? "Zakończona" : "W trakcie"}</label><br />
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
                            Informacje dodatkowe:<br />
                            <textarea type="text" name="note" onChange={this.handleChangeInformations} value={this.state.informations.note} />
                        </label> <br />
                        <label>
                            notatki:<br />
                            <textarea type="text" name="other" onChange={this.handleChangeInformations} value={this.state.informations.other} />
                        </label> <br />
                    </fieldset>

                    <fieldset name="actions">
                        <legend>Podjęte działania</legend>
                        <ul>
                            {this.state.history.map((action, index) =>
                                <li key={index}>{action.desc} - - {action.data}</li>
                            )}
                        </ul>
                        <label>
                            Dodaj działanie:<br />
                            <input type="text" name="newAction" onChange={this.handleChangeInformations} value={this.state.informations.note} />
                        </label> <br />



                    </fieldset>
                    <input type="submit" value="Zapisz" />
                </form>

                <br />
                <br />
                <br />

            </React.Fragment>
        )
    }
}

export default EditReclamation;