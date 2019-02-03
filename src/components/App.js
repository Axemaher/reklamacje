import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReclamationsList from './list/ReclamationsList';
import AddReclamation from './addEdit/AddReclamation';
import EditReclamation from './addEdit/EditReclamation';
import LoginForm from './LoginForm';
import Menu from './Menu';
import { fbase } from '../fbase';
import '../index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faLock, faSpinner, faFileSignature, faList, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faAt, faLock, faSpinner, faFileSignature, faList, faCog, faSignOutAlt)


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            loggedIn: false
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
    loginSuccess = () => {
        this.setState({
            loggedIn: true
        })
    }
    logOut = () => {
        localStorage.removeItem("loggedIn")

        this.setState({
            loggedIn: false
        })
    }
    handleSettings = () => {
        localStorage.setItem('columns', JSON.stringify(this.state.columnsToShow));
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

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                    <LoginForm loginSuccess={this.loginSuccess} />
                }
                {this.state.loggedIn &&
                    <div className="container container-app">
                        <Router>
                            <>
                                {/* <ul>
                                    <li>
                                        <Link to="/">Lista reklamacji</Link>
                                    </li>
                                    <li>
                                        <Link to="/add">Dodaj</Link>
                                    </li>
                                    <li>
                                        <button onClick={this.logOut}>Wyloguj</button>
                                    </li>
                                </ul> */}
                                <Menu logOut={this.logOut} settings={this.handleSettings} />
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

