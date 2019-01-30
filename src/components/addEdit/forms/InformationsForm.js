import React from 'react';
const InformationsForm = (props) => {
    return (
        <fieldset name="informations">
            <legend>Notatki</legend>
            <label>
                Informacje dodatkowe:<br />
                <textarea type="text" name="note" onChange={props.change} value={props.value.note} />
            </label> <br />
            <label>
                notatki:<br />
                <textarea type="text" name="other" onChange={props.change} value={props.value.other} />
            </label> <br />
        </fieldset>
    )
}

export default InformationsForm;