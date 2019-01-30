import React, { Component } from 'react';
import { CurrentDate } from '../CurrentDate'

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
        return (
            <fieldset name="action history">
                <legend>Podjęte działania</legend>
                <ul>
                    {this.props.actionHistory.map((action, index) =>
                        <li key={index}>{action.desc} - - {action.date}</li>
                    )}
                </ul>
                <label>
                    Dodaj działanie:<br />
                    <input type="text" name="newAction" onChange={this.handleChangeAction} value={this.state.actionValue} />
                    <button onClick={this.handleAdd}>Dodaj</button>
                </label> <br />
            </fieldset>
        );
    }
}

export default ActionHistoryForm;