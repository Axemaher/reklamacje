import React, { Component } from 'react';
import { CurrentDate } from './CurrentDate'

class ActionHistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionValue: ""
        }
    }
    handleChangeAction = (e) => {
        this.setState({
            actionValue: e.target.value
        })
    }
    handleAdd = (e) => {
        e.preventDefault()
        const newAction = {
            desc: this.state.actionValue,
            date: CurrentDate("full date")
        }
        this.setState({ actionValue: "" })
        this.props.add(newAction)
    }
    render() {
        const historyTable = this.props.actionHistory.map((action, index) =>
            <tr key={index}>
                <td>{action.desc}</td>
                <td>{action.date}</td>
            </tr>
        );
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

                    <label>
                        Dodaj działanie:
                        <input type="text" name="newAction" onChange={this.handleChangeAction} value={this.state.actionValue} />
                        <button className="btn" onClick={this.handleAdd}>Dodaj</button>
                    </label>
                </fieldset>
            </div>
        );
    }
}

export default ActionHistoryForm;