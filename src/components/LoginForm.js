import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebaseApp } from '../fbase';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savePassword: false,
            email: "",
            password: "",
            checking: false,
            correctLoginData: false,
            wrongLoginData: false
        }
    }
    handleLoginChange = (e) => {
        if (e.target.name === "savePassword") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    authenticate = (e) => {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({
                    correctLoginData: true
                })
                setTimeout(() => {
                    this.props.loginSuccess();
                    if (this.state.savePassword) {
                        localStorage.setItem("loggedIn", true);
                    }
                }, 2000)
            })
            .catch(() => {
                this.setState({
                    wrongLoginData: true
                })
                setTimeout(() => { this.setState({ wrongLoginData: false }) }, 2000)
            })
    }
    render() {
        // let loginButtonContent
        let loginButton = null;
        if (this.state.correctLoginData) {
            loginButton = <button className="login-btn" type="submit">DANE POPRAWNE <span className="loading"><FontAwesomeIcon icon="spinner" /></span></button>
        } else if (this.state.wrongLoginData) {
            loginButton = <button className="login-btn" type="submit">DANE NIEPOPRAWNE <span className="loading"><FontAwesomeIcon icon="spinner" /></span></button>
        } else {
            loginButton = <button className="login-btn" type="submit">ZALOGUJ</button>
        }
        return (
            <div className="container">
                <div className="login">
                    <p className="title">Logowanie</p>
                    <form onSubmit={this.authenticate}>
                        <div className="input-container">
                            <span>
                                <FontAwesomeIcon icon="at" />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleLoginChange} />
                        </div>
                        <div className="input-container">
                            <span>
                                <FontAwesomeIcon icon="lock" />
                            </span>
                            <input
                                type="password"
                                placeholder="Hasło"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleLoginChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="savePassword" className="control control--checkbox">
                                zapisz hasło
                                <input
                                    type="checkbox"
                                    id="savePassword"
                                    name="savePassword"
                                    checked={this.state.savePassword}
                                    onChange={this.handleLoginChange}
                                />
                                <div className="control__indicator"></div>
                            </label>
                        </div>
                        {loginButton}
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;