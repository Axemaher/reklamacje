import React from 'react';

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
        return (
            <div className="modal">
                <div className="modal-content">
                    <form onSubmit={this.handleSave}>
                        <div className="col">
                            <div>
                                <label htmlFor="addDate" className="control control--checkbox">
                                    Data dodania
                                <input
                                        type="checkbox"
                                        id="addDate"
                                        name="addDate"
                                        checked={addDate}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="warranty" className="control control--checkbox">
                                    Gwarancyjna?
                                <input
                                        type="checkbox"
                                        id="warranty"
                                        name="warranty"
                                        checked={warranty}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>

                            <div>
                                <label htmlFor="manufacturer" className="control control--checkbox">
                                    Producent
                                <input
                                        type="checkbox"
                                        id="manufacturer"
                                        name="manufacturer"
                                        checked={manufacturer}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="model" className="control control--checkbox">
                                    Model
                                <input
                                        type="checkbox"
                                        id="model"
                                        name="model"
                                        checked={model}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="problemDesc" className="control control--checkbox">
                                    Opis usterki
                                <input
                                        type="checkbox"
                                        id="problemDesc"
                                        name="problemDesc"
                                        checked={problemDesc}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="ended" className="control control--checkbox">
                                    Zakończona?
                                <input
                                        type="checkbox"
                                        id="ended"
                                        name="ended"
                                        checked={ended}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="sellNumber" className="control control--checkbox">
                                    Nr dok. sprzedaży
                                <input
                                        type="checkbox"
                                        id="sellNumber"
                                        name="sellNumber"
                                        checked={sellNumber}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="company" className="control control--checkbox">
                                    Firma
                                <input
                                        type="checkbox"
                                        id="company"
                                        name="company"
                                        checked={company}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <label htmlFor="nip" className="control control--checkbox">
                                    NIP
                                <input
                                        type="checkbox"
                                        id="nip"
                                        name="nip"
                                        checked={nip}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="name" className="control control--checkbox">
                                    Kontrahent
                                <input
                                        type="checkbox"
                                        id="name"
                                        name="name"
                                        checked={name}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="nick" className="control control--checkbox">
                                    Nick
                                <input
                                        type="checkbox"
                                        id="nick"
                                        name="nick"
                                        checked={nick}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="tel" className="control control--checkbox">
                                    Nr tel.
                                <input
                                        type="checkbox"
                                        id="tel"
                                        name="tel"
                                        checked={tel}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="mail" className="control control--checkbox">
                                    Email
                                <input
                                        type="checkbox"
                                        id="mail"
                                        name="mail"
                                        checked={mail}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="notes" className="control control--checkbox">
                                    Notatki
                                <input
                                        type="checkbox"
                                        id="notes"
                                        name="notes"
                                        checked={notes}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="other" className="control control--checkbox">
                                    Inne
                                <input
                                        type="checkbox"
                                        id="other"
                                        name="other"
                                        checked={other}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="lastHistory" className="control control--checkbox">
                                    Ostatnia interwencja
                                <input
                                        type="checkbox"
                                        id="lastHistory"
                                        name="lastHistory"
                                        checked={lastHistory}
                                        onChange={this.handleChange}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                        </div>
                        <button className="btn" type="submit">Zapisz i zamknij</button>

                    </form>

                </div>
            </div>
        )
    }
}

export default ColumnsSettings;

