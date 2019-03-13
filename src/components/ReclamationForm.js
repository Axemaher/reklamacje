import React from 'react';
import WarrantyCheck from './WarrantyCheck'
class ReclamationForm extends React.Component {
    state = {
        warrantyModal: false,
    }
    handleWarrantyCheck = () => {

        this.setState({ warrantyModal: !this.state.warrantyModal })
    }
    render() {
        return (
            <>
                <div className="form-fieldset reclamation-form">
                    <fieldset name="reclamation">
                        <legend>Reklamacja</legend>
                        {this.props.formForEdit &&
                            <>
                                <p>Numer: <span>{this.props.value.number}</span></p>
                                <p>Data rozpoczęcia: <span>{this.props.value.addDate.stringFormat}</span></p>
                                <div>
                                    <label htmlFor="ended" className="control control--checkbox">
                                        Zakończono
                                    <input
                                            type="checkbox"
                                            id="ended"
                                            name="ended"
                                            onChange={this.props.change}
                                            checked={this.props.value.ended}
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
                                    onChange={this.props.change}
                                    checked={this.props.value.warranty}
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
                                onChange={this.props.change}
                                value={this.props.value.manufacturer}
                            />
                        </label>
                        <label>
                            Model:
                        <input
                                type="text"
                                name="model"
                                onChange={this.props.change}
                                value={this.props.value.model}
                            />
                        </label>
                        <label>
                            Opis usterki:
                        <textarea
                                type="text"
                                name="problemDesc"
                                onChange={this.props.change}
                                value={this.props.value.problemDesc}
                                required
                            />
                        </label>
                        <label>
                            Numer dokumentu sprzedaży:
                        <input
                                type="text"
                                name="sellNumber"
                                onChange={this.props.change}
                                value={this.props.value.sellNumber}
                            />
                        </label>
                    </fieldset>
                </div>
                {this.state.warrantyModal && <WarrantyCheck handleWarrantyCheck={this.handleWarrantyCheck}
                    handleChangeReclamation={this.props.handleChangeReclamation} />}
            </>
        )
    }
}
export default ReclamationForm

