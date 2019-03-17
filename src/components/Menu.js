import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColumnsSettings from './ColumnsSettings';


const Menu = props => {
    const { handleSettings, logOut, settingsState } = props;
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link className="btn" to="/">
                            <span><FontAwesomeIcon icon="list" /></span>
                            LISTA
                    </Link>
                    </li>
                    <li>
                        <Link className="btn" to="/add">
                            <span><FontAwesomeIcon icon="file-signature" /></span>
                            DODAJ
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button onClick={handleSettings} className="btn">
                            <span><FontAwesomeIcon icon="cog" /></span>
                            USTAWIENIA
                    </button>
                    </li>
                    <li>
                        <button className="btn" onClick={logOut}>
                            <span><FontAwesomeIcon icon="sign-out-alt" /></span>
                            WYLOGUJ
                    </button>
                    </li>
                </ul>
            </nav>
            {settingsState && <ColumnsSettings handleSettings={handleSettings} />}
        </>
    );
}

export default Menu;

