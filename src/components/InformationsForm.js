import React from 'react';
const InformationsForm = props => {
    return (
        <div className="form-fieldset informations-form">
            <fieldset name="informations">
                <legend>Notatki</legend>
                <label>
                    Notatki:<br />
                    <textarea type="text" name="note" onChange={props.change} value={props.value.note} />
                </label> <br />
                <label>
                    Informacje dodatkowe:<br />
                    <textarea type="text" name="other" onChange={props.change} value={props.value.other} />
                </label> <br />
            </fieldset>
        </div>
    )
}

export default InformationsForm;