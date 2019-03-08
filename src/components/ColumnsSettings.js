import React from 'react';
import { Link } from 'react-router-dom'

class ColumnsSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnsToShow: {}
        }
    }
    handleChange = (e) => {
        this.setState({
            columnsToShow: {
                ...this.state.columnsToShow, [e.target.name]: e.target.checked
            }
        })
    }
    handleSave = () => {
        localStorage.removeItem("columns")
        localStorage.setItem('columns', JSON.stringify(this.state.columnsToShow));
        this.props.handleSettings()
    }
    componentDidMount() {
        if (localStorage.getItem('columns') === null) {
            return
        } else {
            this.setState({ columnsToShow: JSON.parse(localStorage.getItem('columns')) })
        }
    }
    render() {
        const { addDate, warranty, manufacturer, model, problemDesc, ended, sellNumber, company, nip, name, nick, tel, mail, notes, other, lastHistory } = this.state.columnsToShow;
        const checkboxData = [
            { name: "addDate", label: "Data dodania", checked: addDate },
            { name: "warranty", label: "Gwarancja", checked: warranty },
            { name: "manufacturer", label: "Producent", checked: manufacturer },
            { name: "model", label: "Model", checked: model },
            { name: "problemDesc", label: "Usterka", checked: problemDesc },
            { name: "ended", label: "Status", checked: ended },
            { name: "sellNumber", label: "Nr. dokumentu sprzedaży", checked: sellNumber },
            { name: "company", label: "Firma", checked: company },
            { name: "nip", label: "Nip", checked: nip },
            { name: "name", label: "Kontrahent", checked: name },
            { name: "nick", label: "Nick", checked: nick },
            { name: "tel", label: "Tel", checked: tel },
            { name: "mail", label: "Mail", checked: mail },
            { name: "notes", label: "Notatki", checked: notes },
            { name: "other", label: "Inne", checked: other },
            { name: "lastHistory", label: "Ostatnia interwencja", checked: lastHistory },
        ]
        return (
            <div className="modal">
                <div className="modal-content">
                    <form>
                        <div className="row">
                            {
                                checkboxData.map((data, index) => (
                                    <div key={index}>
                                        <label htmlFor={data.name} className="control control--checkbox">
                                            {data.label}
                                            <input
                                                type="checkbox"
                                                id={data.name}
                                                name={data.name}
                                                checked={data.checked}
                                                onChange={this.handleChange}
                                            />
                                            <div className="control__indicator"></div>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="save-container-settings">
                            <Link className="btn" onClick={this.handleSave} type="submit" to="/">Zapisz i zamknij</Link>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default ColumnsSettings;

