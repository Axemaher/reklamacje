import React, { Component } from 'react';
import ActionHistoryForm from './ActionHistoryForm';
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';
import { Redirect } from 'react-router-dom'


class EditReclamation extends Component {
    constructor(props) {
        super(props);

        const { content } = this.props;
        if (content !== undefined && content.length !== 0) {
            const id = this.props.match.params.id;
            const edited = this.props.content.filter(el => el.id === id)[0]
            this.state = {
                reclamation: edited.reclamation,
                client: edited.client,
                id: edited.id,
                informations: edited.informations,
                history: edited.history,
                correctData: true
            }
        } else {
            this.state = { correctData: false }
        }
    }

    handleSave = () => {
        let newData = { ...this.state };
        delete newData.correctData;
        delete newData.redirect;
        this.props.handleEdit(newData)
        this.setState({ redirect: true })
    }
    handleChangeReclamation = e => {
        if (e.target.name === "warranty" || e.target.name === "ended") {
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

    handleChangeInformations = e => {
        this.setState({
            informations: {
                ...this.state.informations, [e.target.name]: e.target.value
            }
        })
    }
    handleAddAction = newAction => {
        this.setState({
            history: [...this.state.history, newAction]
        })
    }
    render() {

        return (
            <React.Fragment>
                {this.state.correctData ?
                    <form onSubmit={this.handleSave}>
                        <ActionHistoryForm
                            actionHistory={this.state.history}
                            add={this.handleAddAction}
                        />
                        <div className="addForm">
                            <ReclamationForm
                                change={this.handleChangeReclamation}
                                value={this.state.reclamation}
                                formForEdit={true}
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
                            <button type="submit" className="btn btn-save">Zapisz</button>
                        </div>
                    </form>
                    : "Wystąpił błąd, kliknij wstecz lub przejdź do listy reklamacji i spróbuj ponownie"}

                {this.state.redirect && <Redirect to='/' />}

            </React.Fragment>
        )
    }
}

export default EditReclamation;