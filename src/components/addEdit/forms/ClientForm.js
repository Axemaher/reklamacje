import React from 'react';

const ClientForm = (props) => {
    return (
        <fieldset name="client">
            <legend>Klient</legend>
            <label>
                Firma?
<input type="checkbox" name="company" onChange={props.change} checked={props.value.company} />
            </label> <br />
            {props.value.company ?
                <React.Fragment>
                    <label>
                        NIP:
  <input type="text" name="nip" onChange={props.change} value={props.value.nip} />
                    </label> <br />
                </React.Fragment>
                : null
            }
            <label>
                Nazwa:
<input type="text" name="name" onChange={props.change} value={props.value.name} />
            </label> <br />
            <label>
                Nick:
<input type="text" name="nick" onChange={props.change} value={props.value.nick} />
            </label> <br />
            <label>
                Telefon:
<input type="text" name="tel" onChange={props.change} value={props.value.tel} />
            </label> <br />
            <label>
                Email:
<input type="email" name="mail" onChange={props.change} value={props.value.mail} />
            </label> <br />
        </fieldset>
    )
}
export default ClientForm