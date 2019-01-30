import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReclamationsList from './list/ReclamationsList';
import AddReclamation from './addEdit/AddReclamation';
import EditReclamation from './addEdit/EditReclamation';
import { fbase, firebaseApp } from '../fbase';
import '../index.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            loggedIn: false,
            email: "",
            password: "",
        }
    }
    add = (newData) => {
        if (Array.isArray(this.state.content)) {
            this.setState({ content: [...this.state.content, newData] })
        } else {
            this.setState({ content: [newData] })
        }

    }
    edit = (data) => {
        const index = this.state.content.findIndex(el => el.id === data.id)
        const stateCopy = this.state;
        stateCopy.content[index] = data;
        this.setState({
            content: stateCopy.content
        })

    }

    componentDidMount() {
        if (localStorage.getItem("loggedIn")) {
            this.setState({
                loggedIn: localStorage.getItem("loggedIn")
            })
        }
        this.ref = fbase.syncState('content', {
            context: this,
            state: 'content'
        })
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref)
    }
    handleLoginChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    authenticate = (e) => {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({
                    loggedIn: true
                });
                localStorage.setItem("loggedIn", true);
            })
            .catch(() => {
                console.log("Wrong data to login")
            })
    }
    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                    <form onSubmit={this.authenticate}>
                        <input
                            placeholder="email"
                            type="email"
                            name="email"
                            onChange={this.handleLoginChange}
                            value={this.state.email} />
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleLoginChange}
                            value={this.state.password} />
                        <button type="submit">Login</button>
                    </form>
                }
                {this.state.loggedIn &&
                    <div>
                        <Router>
                            <>
                                <ul>
                                    <li>
                                        <Link to="/">Lista reklamacji</Link>
                                    </li>
                                    <li>
                                        <Link to="/add">Dodaj</Link>
                                    </li>
                                </ul>
                                <Switch>
                                    <Route
                                        exact path="/"
                                        render={(props) =>
                                            <ReclamationsList
                                                {...props}
                                                content={this.state.content}
                                            />}
                                    />
                                    <Route
                                        path="/add"
                                        render={(props) =>
                                            <AddReclamation
                                                {...props}
                                                handleAdd={this.add}
                                                reclamationCounter={this.state.content.length}
                                            />}
                                    />
                                    <Route
                                        path="/edit/:id"
                                        render={(props) =>
                                            <EditReclamation
                                                {...props}
                                                handleEdit={this.edit}
                                                content={this.state.content}
                                            />}
                                    />
                                </Switch>
                            </>
                        </Router>
                    </div>}

            </div>
        );
    }
}

export default App;

