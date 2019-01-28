import React from 'react';
import ActionHistoryForm from './ActionHistoryForm';
import InformationsForm from './InformationsForm';
import ClientForm from './ClientForm';
import ReclamationForm from './ReclamationForm';

class EditReclamation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        const edited = this.props.content.filter(el => el.id === id)[0]
        this.setState({
            reclamation: edited.reclamation,
            client: edited.client,
            id: edited.id,
            informations: edited.informations,
            history: edited.history,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let newData = this.state;
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
    handleAddAction = (newAction) => {
        this.setState({
            history: [...this.state.history, newAction]
        })
    }
    render() {
        console.log(this.state.history)

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
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

                    <ActionHistoryForm
                        actionHistory={this.state.history}
                        add={this.handleAddAction}
                    />
                    <input type="submit" value="Zapisz" />
                </form>
            </React.Fragment>
        )
    }
}

export default EditReclamation;