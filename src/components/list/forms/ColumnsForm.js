import React from 'react';
const ColumnsForm = (props) => {

    const { addDate, warranty, manufacturer, model, problemDesc, ended, sellNumber, company, nip, name, nick, tel, mail, notes, other, lastHistory } = props.columnsToShow;
    return (
        <form style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>
                <input
                    id="addDate"
                    type="checkbox"
                    name="addDate"
                    checked={addDate}
                    onChange={props.change} />
                <label htmlFor="addDate">Data dodania</label>

            </p>
            <p>
                <input
                    id="warranty"
                    type="checkbox"
                    name="warranty"
                    checked={warranty}
                    onChange={props.change} />
                <label htmlFor="warranty">Gwarancyjna</label>

            </p>
            <p>
                <input
                    id="manufacturer"
                    type="checkbox"
                    name="manufacturer"
                    checked={manufacturer}
                    onChange={props.change} />
                <label htmlFor="manufacturer">Producent</label>

            </p>
            <p>
                <input
                    id="model"
                    type="checkbox"
                    name="model"
                    checked={model}
                    onChange={props.change} />
                <label htmlFor="model">Model</label>

            </p>
            <p>
                <input
                    id="problemDesc"
                    type="checkbox"
                    name="problemDesc"
                    checked={problemDesc}
                    onChange={props.change} />
                <label htmlFor="problemDesc">Opis problemu</label>

            </p>
            <p>
                <input
                    id="ended"
                    type="checkbox"
                    name="ended"
                    checked={ended}
                    onChange={props.change} />
                <label htmlFor="ended">Status</label>

            </p>
            <p>
                <input
                    id="sellNumber"
                    type="checkbox"
                    name="sellNumber"
                    checked={sellNumber}
                    onChange={props.change} />
                <label htmlFor="sellNumber">Nr. dok.</label>

            </p>
            <p>
                <input
                    id="company"
                    type="checkbox"
                    name="company"
                    checked={company}
                    onChange={props.change} />
                <label htmlFor="company">Firma</label>

            </p>
            <p>
                <input
                    id="nip"
                    type="checkbox"
                    name="nip"
                    checked={nip}
                    onChange={props.change} />
                <label htmlFor="nip">NIP</label>

            </p>
            <p>
                <input
                    id="name"
                    type="checkbox"
                    name="name"
                    checked={name}
                    onChange={props.change} />
                <label htmlFor="name">Reklamujący</label>

            </p>
            <p>
                <input
                    id="nick"
                    type="checkbox"
                    name="nick"
                    checked={nick}
                    onChange={props.change} />
                <label htmlFor="nick">Nick</label>

            </p>
            <p>
                <input
                    id="tel"
                    type="checkbox"
                    name="tel"
                    checked={tel}
                    onChange={props.change} />
                <label htmlFor="tel">Nr. tel.</label>

            </p>
            <p>
                <input
                    id="mail"
                    type="checkbox"
                    name="mail"
                    checked={mail}
                    onChange={props.change} />
                <label htmlFor="mail">Mail</label>

            </p>
            <p>
                <input
                    id="notes"
                    type="checkbox"
                    name="notes"
                    checked={notes}
                    onChange={props.change} />
                <label htmlFor="notes">Notatki</label>

            </p>
            <p>
                <input
                    id="other"
                    type="checkbox"
                    name="other"
                    checked={other}
                    onChange={props.change} />
                <label htmlFor="other">Inne</label>

            </p>
            <p>
                <input
                    id="lastHistory"
                    type="checkbox"
                    name="lastHistory"
                    checked={lastHistory}
                    onChange={props.change} />
                <label htmlFor="lastHistory">Ostatnia akcja</label>

            </p>
        </form>
    )
}
export default ColumnsForm