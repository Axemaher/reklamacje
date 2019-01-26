import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReclamationsList from './ReclamationsList';
import AddReclamation from './AddReclamation';
import EditReclamation from './EditReclamation';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                { name: "Adam", sex: "male", id: "123" },
                { name: "Stanisław", sex: "male", id: "243" },
                { name: "Krzysiek", sex: "male", id: "322" },
            ]
        }
    }
    add = (newData) => {
        console.log(newData)
        const stateCopy = [...this.state.content];
        stateCopy.push(newData)
        this.setState({
            content: stateCopy
        })
    }
    edit = (data) => {
        const index = this.state.content.findIndex(el => el.id === data.id)
        console.log(index)
        const stateCopy = this.state;
        stateCopy.content[index] = data;
        this.setState({
            content: stateCopy.content
        })
        console.log(this.state)
    }
    render() {
        console.log(this.state)
        return (
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

            </div>
        );
    }
}

export default App;

