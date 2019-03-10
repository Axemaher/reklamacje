import React from 'react';
import ActionHistoryForm from './ActionHistoryForm';
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';
import { Link } from 'react-router-dom'


class EditReclamation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reclamation: "",
            client: "",
            id: "",
            informations: "",
            history: "",
            dataOk: false
        }
    }

    componentWillMount() {
        const { content } = this.props;
        if (content !== undefined && content.length !== 0) {
            const id = this.props.match.params.id;
            const edited = this.props.content.filter(el => el.id === id)[0]
            this.setState({
                reclamation: edited.reclamation,
                client: edited.client,
                id: edited.id,
                informations: edited.informations,
                history: edited.history,
                dataOk: true
            })
        } else if (content === undefined) {
            this.setState({ dataOk: false })
        }
        console.log(this.props.content)

    }
    handleSave = (e) => {
        let newData = this.state;
        this.props.handleEdit(newData)
    }
    handleChangeReclamation = (e) => {
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
    handleAddAction = (newAction) => {
        this.setState({
            history: [...this.state.history, newAction]
        })
    }
    render() {

        return (
            <React.Fragment>
                {this.state.dataOk ?
                    <form>
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
                            <Link className="btn btn-save" onClick={this.handleSave} to="/">Zapisz</Link>
                        </div>
                    </form>
                    : "Wystąpił błąd, kliknij wstecz lub przejdź do listy reklamacji i spróbuj ponownie"}

            </React.Fragment>
        )
    }
}

export default EditReclamation;