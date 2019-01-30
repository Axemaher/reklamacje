import React from 'react';
import ColumnsForm from './forms/ColumnsForm'
import { Link } from 'react-router-dom';

class ReclamationsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsToShow: {
                addDate: true,
                warranty: true,
                manufacturer: true,
                model: true,
                problemDesc: true,
                ended: true,
                sellNumber: true,
                company: true,
                nip: true,
                name: true,
                nick: true,
                tel: true,
                mail: true,
                notes: true,
                other: true,
                lastHistory: true
            },
            updated: false,
            sorting: "sorted"

        }
        this.reclamations = null
    }

    handleChange = (e) => {
        this.setState({
            columnsToShow: {
                ...this.state.columnsToShow, [e.target.name]: e.target.checked
            }
        })
    }

    handleSort = (dataSort) => {
        let sorted = this.reclamations.slice(0);

        sorted.sort(function (a, b) {
            let x, y;
            switch (dataSort) {
                case "date":
                    x = a.reclamation.addDate.toLowerCase();
                    y = b.reclamation.addDate.toLowerCase();
                    break;

                case "warranty":
                    x = a.reclamation.warranty.toLowerCase();
                    y = b.reclamation.warranty.toLowerCase();
                    break;

                case "manufacturer":
                    x = a.reclamation.manufacturer.toLowerCase();
                    y = b.reclamation.manufacturer.toLowerCase();
                    break;

                case "model":
                    x = a.reclamation.model.toLowerCase();
                    y = b.reclamation.model.toLowerCase();
                    break;
                case "problemDesc":
                    x = a.reclamation.problemDesc.toLowerCase();
                    y = b.reclamation.problemDesc.toLowerCase();
                    break;
                case "ended":
                    x = a.reclamation.ended.toLowerCase();
                    y = b.reclamation.ended.toLowerCase();
                    break;
                case "sellNumber":
                    x = a.reclamation.sellNumber.toLowerCase();
                    y = b.reclamation.sellNumber.toLowerCase();
                    break;
                case "company":
                    x = a.client.company.toLowerCase();
                    y = b.client.company.toLowerCase();
                    break;
                case "nip":
                    x = a.client.nip.toLowerCase();
                    y = b.client.nip.toLowerCase();
                    break;
                case "name":
                    x = a.client.name.toLowerCase();
                    y = b.client.name.toLowerCase();
                    break;
                case "nick":
                    x = a.client.nick.toLowerCase();
                    y = b.client.nick.toLowerCase();
                    break;
                case "tel":
                    x = a.client.tel.toLowerCase();
                    y = b.client.tel.toLowerCase();
                    break;
                case "mail":
                    x = a.client.mail.toLowerCase();
                    y = b.client.mail.toLowerCase();
                    break;
                case "notes":
                    x = a.informations.note.toLowerCase();
                    y = b.informations.note.toLowerCase();
                    break;
                case "other":
                    x = a.informations.other.toLowerCase();
                    y = b.informations.other.toLowerCase();
                    break;
                default: return null
            }
            return x < y ? -1 : x > y ? 1 : 0;
        });
        if (this.state.sorting === "sorted") {
            this.reclamations = sorted;
            this.setState({ sorting: "reverse" });
        } else if (this.state.sorting === "reverse") {
            this.reclamations = sorted.reverse();
            this.setState({ sorting: "sorted" })

        }
        this.setState({ updated: true })
    }

    saveColumns = () => {
        localStorage.setItem('columns', JSON.stringify(this.state.columnsToShow));
    }
    componentDidMount() {
        if (localStorage.getItem('columns') === null) {
            return
        }
        this.setState({ columnsToShow: JSON.parse(localStorage.getItem('columns')) })
    }
    render() {
        if (this.state.updated === false) {
            this.reclamations = this.props.content;
        }
        const { addDate, warranty, manufacturer, model, problemDesc, ended, sellNumber, company, nip, name, nick, tel, mail, notes, other, lastHistory } = this.state.columnsToShow;
        return (

            < div className="reclamationList" >
                <ColumnsForm columnsToShow={this.state.columnsToShow} change={this.handleChange} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>numer reklamacji</th>

                            {addDate &&
                                <th>Data dodania
                                    <span onClick={() => this.handleSort("date")}>&#8711;</span>
                                </th>}
                            {warranty &&
                                <th>Gwarancyjna
                                    <span onClick={() => this.handleSort("warranty")}>&#8711;</span>
                                </th>}
                            {manufacturer &&
                                <th>Producent
                                    <span onClick={() => this.handleSort("manufacturer")}>&#8711;</span>
                                </th>}
                            {model &&
                                <th>Model
                                    <span onClick={() => this.handleSort("model")}>&#8711;</span>
                                </th>}
                            {problemDesc &&
                                <th>Opis usterki
                                    <span onClick={() => this.handleSort("problemDesc")}>&#8711;</span>
                                </th>}
                            {ended &&
                                <th>Status
                                    <span onClick={() => this.handleSort("ended")}>&#8711;</span>
                                </th>}
                            {sellNumber &&
                                <th>Nr. dok.
                                    <span onClick={() => this.handleSort("sellNumber")}>&#8711;</span>
                                </th>}
                            {company &&
                                <th>Firma
                                    <span onClick={() => this.handleSort("company")}>&#8711;</span>
                                </th>}
                            {nip &&
                                <th>NIP
                                    <span onClick={() => this.handleSort("nip")}>&#8711;</span>
                                </th>}
                            {name &&
                                <th>Reklamujący
                                    <span onClick={() => this.handleSort("name")}>&#8711;</span>
                                </th>}
                            {nick &&
                                <th>Nick
                                    <span onClick={() => this.handleSort("nick")}>&#8711;</span>
                                </th>}
                            {tel &&
                                <th>Tel
                                    <span onClick={() => this.handleSort("tel")}>&#8711;</span>
                                </th>}
                            {mail &&
                                <th>Mail
                                    <span onClick={() => this.handleSort("mail")}>&#8711;</span>
                                </th>}
                            {notes &&
                                <th>Notatki
                                    <span onClick={() => this.handleSort("notes")}>&#8711;</span>
                                </th>}
                            {other &&
                                <th>Inne
                                    <span onClick={() => this.handleSort("other")}>&#8711;</span>
                                </th>}
                            {lastHistory &&
                                <th>Ostatnia akcja
                                    <span onClick={() => this.handleSort("lastHistory")}>&#8711;</span>
                                </th>}
                        </tr>
                    </thead>

                    <tbody>
                        {this.reclamations.map(recl =>
                            <tr>
                                <th><Link to={`/edit/${recl.id}`}>{recl.reclamation.number}</Link></th>
                                {addDate && <th>{recl.reclamation.addDate}</th>}
                                {warranty && <th>{recl.reclamation.warranty ? "tak" : "nie"}</th>}
                                {manufacturer && <th>{recl.reclamation.manufacturer}</th>}
                                {model && <th>{recl.reclamation.model}</th>}
                                {problemDesc && <th>{recl.reclamation.problemDesc}</th>}
                                {ended && <th>{recl.reclamation.ended ? "tak" : "nie"}</th>}
                                {sellNumber && <th>{recl.reclamation.sellNumber}</th>}
                                {company && <th>{recl.client.company ? "tak" : "nie"}</th>}
                                {nip && <th>{recl.client.nip}</th>}
                                {name && <th>{recl.client.name}</th>}
                                {nick && <th>{recl.client.nick}</th>}
                                {tel && <th>{recl.client.tel}</th>}
                                {mail && <th>{recl.client.mail}</th>}
                                {notes && <th>{recl.informations.notes}</th>}
                                {other && <th>{recl.informations.other}</th>}
                                {lastHistory &&
                                    <th>{recl.history[recl.history.length - 1].desc}<br />
                                        {recl.history[recl.history.length - 1].date}
                                    </th>}


                            </tr>)}
                    </tbody>
                </table>
                <button onClick={this.saveColumns}>Save columns</button>
            </div >
        )
    }
}

export default ReclamationsList;


