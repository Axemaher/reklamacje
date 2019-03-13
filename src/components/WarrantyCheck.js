import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class WarrantyCheck extends React.Component {
    state = {
        warrantyTime: "12msc",
        warrantyStartDate: "",
        daysToEndWarranty: ""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const stateCopy = { ...this.state }
        let warrantyYears = 1;
        switch (stateCopy.warrantyTime) {
            case "12msc":
                warrantyYears = 1;
                break;
            case "24msc":
                warrantyYears = 2;
                break;
            case "36msc":
                warrantyYears = 3;
                break;
        }
        let startWarranty = stateCopy.warrantyStartDate;
        startWarranty = new Date(startWarranty);

        const year = startWarranty.getFullYear();
        const month = startWarranty.getMonth();
        const day = startWarranty.getDate();

        let endWarranty = new Date(year + warrantyYears, month, day + 1);
        endWarranty = endWarranty.getTime();

        let today = new Date();
        today = today.getTime();
        if (!isNaN(startWarranty)) {
            stateCopy.daysToEndWarranty = parseInt((endWarranty - today) / (24 * 3600 * 1000));
            this.setState({
                daysToEndWarranty: stateCopy.daysToEndWarranty
            })

        }

    }
    render() {
        return (
            <div className="modal">
                <div className="modal-content warranty-check">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            Czas trwania gwarancji:
                            <select name="warrantyTime" value={this.state.warrantyTime} onChange={this.handleChange.bind(this)}>
                                <option value="12msc">12 miesięcy</option>
                                <option value="24msc">24 miesiące</option>
                                <option value="36msc">36 miesięcy</option>
                            </select>
                        </label>
                        <label>
                            Data zakupu:
                            <input type="date" name="warrantyStartDate" required onChange={this.handleChange.bind(this)} />
                        </label>
                        Status:
                        {this.state.daysToEndWarranty === "" ?
                            "" :
                            <span>{this.state.daysToEndWarranty <= 0 ? ` zakończony` : ` pozostało ${this.state.daysToEndWarranty} dni`}</span>}
                        <button className="btn" type="submit" >sprawdź</button>
                    </form>

                    <button className="btn btn-x" onClick={this.props.handleWarrantyCheck}><FontAwesomeIcon className="faIcon" icon="times" /></button>
                </div>
            </div >
        )
    }
}
export default WarrantyCheck;