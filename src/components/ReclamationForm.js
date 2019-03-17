import React, { Component } from 'react';
import WarrantyCheck from './WarrantyCheck'
class ReclamationForm extends Component {
    state = {
        warrantyModal: false,
    }
    handleWarrantyCheck = () => {
        this.setState({ warrantyModal: !this.state.warrantyModal })
    }
    render() {
        const { number, addDate, ended, warranty, manufacturer, model, problemDesc, sellNumber } = this.props.value;
        const { formForEdit, change, handleChangeReclamation } = this.props;
        return (
            <>
                <div className="form-fieldset reclamation-form">
                    <fieldset name="reclamation">
                        <legend>Reklamacja</legend>
                        {formForEdit &&
                            <>
                                <p>Numer: <span>{number}</span></p>
                                <p>Data rozpoczęcia: <span>{addDate.stringFormat}</span></p>
                                <div>
                                    <label htmlFor="ended" className="control control--checkbox">
                                        Zakończono
                                    <input
                                            type="checkbox"
                                            id="ended"
                                            name="ended"
                                            onChange={change}
                                            checked={ended}
                                        />
                                        <div className="control__indicator"></div>
                                    </label>
                                </div>
                            </>}
                        <div className="warranty">
                            <label htmlFor="warranty" className="control control--checkbox">
                                Reklamacja gwarancyjna
                                <input
                                    type="checkbox"
                                    id="warranty"
                                    name="warranty"
                                    onChange={change}
                                    checked={warranty}
                                />
                                <div className="control__indicator"></div>
                            </label>
                            <p onClick={this.handleWarrantyCheck}>sprawdź</p>
                        </div>


                        <label>
                            Producent:
                        <input
                                type="text"
                                name="manufacturer"
                                onChange={change}
                                value={manufacturer}
                            />
                        </label>
                        <label>
                            Model:
                        <input
                                type="text"
                                name="model"
                                onChange={change}
                                value={model}
                            />
                        </label>
                        <label>
                            Opis usterki:
                        <textarea
                                type="text"
                                name="problemDesc"
                                onChange={change}
                                value={problemDesc}
                                required
                            />
                        </label>
                        <label>
                            Numer dokumentu sprzedaży:
                        <input
                                type="text"
                                name="sellNumber"
                                onChange={change}
                                value={sellNumber}
                            />
                        </label>
                    </fieldset>
                </div>
                {this.state.warrantyModal && <WarrantyCheck handleWarrantyCheck={this.handleWarrantyCheck}
                    handleChangeReclamation={handleChangeReclamation} />}
            </>
        )
    }
}
export default ReclamationForm

