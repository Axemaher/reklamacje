import React from 'react';
const ReclamationForm = (props) => {
    return (
        <fieldset name="reclamation">
            <legend>Reklamacja</legend>
            {props.formForEdit &&
                <>
                    <label>Numer: {props.value.number}</label><br />
                    <label>Data dodania: {props.value.addDate}</label><br />
                    <label>Status: {props.value.ended ? "Zakończona" : "W trakcie"}</label><br />
                </>}
            <label>
                reklamacja gwarancyjna?
<input type="checkbox" name="warranty" onChange={props.change} checked={props.value.warranty} />
            </label> <br />
            <label>
                Producent:
<input type="text" name="manufacturer" onChange={props.change} value={props.value.manufacturer} />
            </label> <br />
            <label>
                Model:
<input type="text" name="model" onChange={props.change} value={props.value.model} />
            </label> <br />
            <label>
                Opis usterki:
<textarea type="text" name="problemDesc" onChange={props.change} value={props.value.problemDesc} />
            </label> <br />
        </fieldset>
    )
}
export default ReclamationForm