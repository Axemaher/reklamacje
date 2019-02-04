import React from 'react';

const ClientForm = (props) => {
    return (
        <div className="form-fieldset client-form">
            <fieldset name="client">
                <legend>Klient</legend>


                <div>
                    <label htmlFor="company" className="control control--checkbox">
                        Firma
                        <input
                            type="checkbox"
                            id="company"
                            name="company"
                            onChange={props.change}
                            checked={props.value.company}
                        />
                        <div className="control__indicator"></div>
                    </label>
                </div>


                {props.value.company ?
                    <React.Fragment>
                        <label>
                            NIP:
                            <input
                                type="text"
                                name="nip"
                                onChange={props.change}
                                value={props.value.nip}
                            />
                        </label>
                    </React.Fragment>
                    : null
                }
                <label>
                    Nazwa:
                    <input
                        type="text"
                        name="name"
                        onChange={props.change}
                        value={props.value.name}
                    />
                </label>
                <label>
                    Nick:
                    <input
                        type="text"
                        name="nick"
                        onChange={props.change}
                        value={props.value.nick}
                    />
                </label>
                <label>
                    Telefon:
                    <input
                        type="text"
                        name="tel"
                        onChange={props.change}
                        value={props.value.tel}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="mail"
                        onChange={props.change}
                        value={props.value.mail}
                    />
                </label>
            </fieldset>
        </div>
    )
}
export default ClientForm