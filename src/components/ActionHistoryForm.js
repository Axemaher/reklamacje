import React, { Component } from 'react';
import { CurrentDate } from './CurrentDate'

class ActionHistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionValue: "",
            correctValue: true
        }
    }
    handleChangeAction = e => {
        this.setState({
            actionValue: e.target.value
        })
    }
    handleAdd = e => {
        e.preventDefault()
        if (this.state.actionValue.length <= 3) {
            this.setState({ correctValue: false })
        } else {
            this.setState({ correctValue: true })
            const newAction = {
                desc: this.state.actionValue,
                date: CurrentDate("full date")
            }
            this.setState({ actionValue: "" })
            this.props.add(newAction)
        }

    }
    render() {
        const historyTable = this.props.actionHistory.map((action, index) =>
            <tr key={index}>
                <td>{action.desc}</td>
                <td>{action.date}</td>
            </tr>
        );
        const { actionValue, correctValue } = this.state;
        return (
            <div className="form-history-fieldset history-form">
                <fieldset name="action history">
                    <legend>Podjęte działania</legend>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Wykonana interwencja</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyTable}
                        </tbody>
                    </table>

                    <div>
                        Dodaj działanie:
                        <span className="label-with-error">
                            <input type="text" name="newAction" onChange={this.handleChangeAction} value={actionValue} />
                            {correctValue ? "" : <span>wymagane przynajmniej 3 znaki</span>}
                        </span>
                        <button className="btn" onClick={this.handleAdd}>Dodaj (proszę pamiętać o zapisaniu)</button>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default ActionHistoryForm;