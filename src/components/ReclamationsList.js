import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ReclamationsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsToShow: {},
            updated: false,
            sorting: "sorted"

        }
        this.reclamations = null
    }

    handleSort = (dataSort) => {
        let sorted = this.reclamations.slice(0);

        sorted.sort(function (a, b) {
            let x, y;
            switch (dataSort) {
                case "date":
                    x = a.reclamation.addDate;
                    y = b.reclamation.addDate;
                    break;

                case "warranty":
                    x = a.reclamation.warranty;
                    y = b.reclamation.warranty;
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
                    x = a.reclamation.ended;
                    y = b.reclamation.ended;
                    break;
                case "sellNumber":
                    x = a.reclamation.sellNumber.toLowerCase();
                    y = b.reclamation.sellNumber.toLowerCase();
                    break;
                case "company":
                    x = a.client.company;
                    y = b.client.company;
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
                    x = a.client.tel;
                    y = b.client.tel;
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
    componentDidMount() {
        if (localStorage.getItem('columns') === null) {
            return
        }
        this.setState({ columnsToShow: JSON.parse(localStorage.getItem('columns')) })
    }
    componentWillReceiveProps() {
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
        const thData = [
            { sort: false, label: "Numer", visible: true },
            { sort: "addDate", label: "Data dodania", visible: addDate },
            { sort: "warranty", label: "Gwarancja", visible: warranty },
            { sort: "manufacturer", label: "Producent", visible: manufacturer },
            { sort: "model", label: "Model", visible: model },
            { sort: "problemDesc", label: "Usterka", visible: problemDesc },
            { sort: "ended", label: "Status", visible: ended },
            { sort: "sellNumber", label: "Dok. sprzedaży", visible: sellNumber },
            { sort: "company", label: "Firma", visible: company },
            { sort: "nip", label: "Nip", visible: nip },
            { sort: "name", label: "Kontrahent", visible: name },
            { sort: "nick", label: "Nick", visible: nick },
            { sort: "tel", label: "Tel", visible: tel },
            { sort: "mail", label: "Mail", visible: mail },
            { sort: "notes", label: "Notatki", visible: notes },
            { sort: "other", label: "Inne", visible: other },
            { sort: false, label: "Ostatnia interwencja", visible: lastHistory },
        ]
        const thDisplay = thData.map((data, index) => (
            data.visible &&
            <th key={index}>{data.label}
                {data.sort && <span onClick={() => this.handleSort(data.sort)}><FontAwesomeIcon className="sort-icon" icon="sort" /></span>}
            </th>
        ))
        return (
            <div>
                <div className="reclamationList" >
                    <table className="table">
                        <thead>
                            <tr>
                                {thDisplay}
                            </tr>
                        </thead>

                        <tbody>
                            {this.reclamations.length !== 0 && this.reclamations.length !== undefined ? this.reclamations.map(recl =>
                                <tr key={recl.id}>
                                    <th><Link to={`/edit/${recl.id}`}>{recl.reclamation.number}</Link></th>
                                    {addDate && <th>{recl.reclamation.addDate}</th>}
                                    {warranty && <th>{recl.reclamation.warranty ?
                                        <FontAwesomeIcon className="checked-icon" icon="check-square" />
                                        : null}</th>}
                                    {manufacturer && <th>{recl.reclamation.manufacturer}</th>}
                                    {model && <th>{recl.reclamation.model}</th>}
                                    {problemDesc && <th>{recl.reclamation.problemDesc}</th>}
                                    {ended && <th>{recl.reclamation.ended ?
                                        <FontAwesomeIcon className="checked-icon" icon="check-square" />
                                        : null}</th>}
                                    {sellNumber && <th>{recl.reclamation.sellNumber}</th>}
                                    {company && <th>{recl.client.company ?
                                        <FontAwesomeIcon className="checked-icon" icon="check-square" />
                                        : null}</th>}
                                    {nip && <th>{recl.client.nip}</th>}
                                    {name && <th>{recl.client.name}</th>}
                                    {nick && <th>{recl.client.nick}</th>}
                                    {tel && <th>{recl.client.tel}</th>}
                                    {mail && <th>{recl.client.mail}</th>}
                                    {notes && <th>{recl.informations.notes ?
                                        <FontAwesomeIcon className="checked-icon" icon="check-square" />
                                        : null}</th>}
                                    {other && <th>{recl.informations.other ?
                                        <FontAwesomeIcon className="checked-icon" icon="check-square" />
                                        : null}</th>}
                                    {lastHistory &&
                                        <th>{recl.history[recl.history.length - 1].desc}<br />
                                            {recl.history[recl.history.length - 1].date}
                                        </th>}
                                </tr>) : null}
                        </tbody>
                    </table>
                </div >
            </div>

        )
    }
}

export default ReclamationsList;


