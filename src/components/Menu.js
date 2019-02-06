import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColumnsSettings from './ColumnsSettings';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: false
        }
    }
    render() {
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
                            <button onClick={this.props.handleSettings} className="btn">
                                <span><FontAwesomeIcon icon="cog" /></span>
                                USTAWIENIA
                    </button>
                        </li>
                        <li>
                            <button className="btn" onClick={this.props.logOut}>
                                <span><FontAwesomeIcon icon="sign-out-alt" /></span>
                                WYLOGUJ
                    </button>
                        </li>
                    </ul>
                </nav>
                {this.props.settingsState && <ColumnsSettings handleSettings={this.props.handleSettings} />}
            </>
        );
    }
}

export default Menu;

