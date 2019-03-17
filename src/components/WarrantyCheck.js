import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class WarrantyCheck extends React.Component {
    state = {
        warrantyTime: "12msc",
        warrantyStartDate: "",
        daysToEndWarranty: "",
        correctValue: true
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
            default: return;
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
                daysToEndWarranty: stateCopy.daysToEndWarranty,
                correctValue: true
            })
        } else {
            this.setState({ correctValue: false })
        }
    }
    render() {
        const { warrantyTime, daysToEndWarranty, correctValue } = this.state;
        return (
            <div className="modal">
                <div className="modal-content warranty-check">
                    <div >
                        <label>
                            Czas trwania gwarancji:
                            <select name="warrantyTime" value={warrantyTime} onChange={this.handleChange}>
                                <option value="12msc">12 miesięcy</option>
                                <option value="24msc">24 miesiące</option>
                                <option value="36msc">36 miesięcy</option>
                            </select>
                        </label>
                        <label>
                            Data zakupu:
                            <span className="label-with-error">
                                <input type="date" name="warrantyStartDate" required onChange={this.handleChange} />
                                {correctValue ? "" : <span>proszę podać poprawną datę zakupu</span>}
                            </span>

                        </label>

                        Status:
                        {this.state.daysToEndWarranty === "" ?
                            "" :
                            <span>{daysToEndWarranty <= 0 ? ` zakończony` : ` pozostało ${daysToEndWarranty} dni`}</span>}
                        <button className="btn" type="submit" onClick={this.handleSubmit}>sprawdź</button>
                    </div>
                    <button className="btn btn-x" onClick={this.props.handleWarrantyCheck}>
                        <FontAwesomeIcon className="faIcon" icon="times" />
                    </button>
                </div>
            </div >
        )
    }
}
export default WarrantyCheck;