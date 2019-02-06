import React from 'react';
const ReclamationForm = (props) => {
    return (
        <div className="form-fieldset reclamation-form">
            <fieldset name="reclamation">
                <legend>Reklamacja</legend>
                {props.formForEdit &&
                    <>
                        <p>Numer: <span>{props.value.number}</span></p>
                        <p>Data rozpoczęcia: <span>{props.value.addDate}</span></p>
                        {/* <p>Status: <span>{props.value.ended ? "Zakończona" : "W trakcie"}</span></p> */}
                        <div>
                            <label htmlFor="ended" className="control control--checkbox">
                                Zakończono
                                <input
                                    type="checkbox"
                                    id="ended"
                                    name="ended"
                                    onChange={props.change}
                                    checked={props.value.ended}
                                />
                                <div className="control__indicator"></div>
                            </label>
                        </div>
                    </>}
                <div>
                    <label htmlFor="warranty" className="control control--checkbox">
                        Reklamacja gwarancyjna
                                <input
                            type="checkbox"
                            id="warranty"
                            name="warranty"
                            onChange={props.change}
                            checked={props.value.warranty}
                        />
                        <div className="control__indicator"></div>
                    </label>
                </div>


                <label>
                    Producent:
                    <input
                        type="text"
                        name="manufacturer"
                        onChange={props.change}
                        value={props.value.manufacturer}
                    />
                </label>
                <label>
                    Model:
                    <input
                        type="text"
                        name="model"
                        onChange={props.change}
                        value={props.value.model}
                    />
                </label>
                <label>
                    Opis usterki:
                    <textarea
                        type="text"
                        name="problemDesc"
                        onChange={props.change}
                        value={props.value.problemDesc}
                    />
                </label>
                <label>
                    Numer dokumentu sprzedaży:
<input
                        type="text"
                        name="sellNumber"
                        onChange={props.change}
                        value={props.value.sellNumber}
                    />
                </label>
            </fieldset>
        </div>
    )
}
export default ReclamationForm

