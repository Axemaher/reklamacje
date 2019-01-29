import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReclamationsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnsToShow: {
                number: true,
                addDate: true,
                warranty: true,
                manufacturer: true,
                model: true,
            },
            updated: false,
            sorting: "sorted"

        }
        this.reclamations = null
    }

    handleChange = (e) => {
        this.setState({
            columnsToShow: {
                ...this.state.columnsToShow, [e.target.name]: e.target.checked
            }
        })
    }

    handleSort = (dataSort) => {
        let sorted = this.reclamations.slice(0);

        sorted.sort(function (a, b) {
            let x, y;
            switch (dataSort) {
                case "number":
                    x = a.reclamation.number.toLowerCase();
                    y = b.reclamation.number.toLowerCase();
                    break;

                case "date":
                    x = a.reclamation.addDate.toLowerCase();
                    y = b.reclamation.addDate.toLowerCase();
                    break;

                case "warranty":
                    x = a.reclamation.warranty.toLowerCase();
                    y = b.reclamation.warranty.toLowerCase();
                    break;

                case "manufacturer":
                    x = a.reclamation.manufacturer.toLowerCase();
                    y = b.reclamation.manufacturer.toLowerCase();
                    break;
            }
            return x < y ? -1 : x > y ? 1 : 0;
        });
        if (this.state.sorting === "sorted") {
            this.reclamations = sorted;
            this.setState({ sorting: "reverse" });
        } else if (this.state.sorting === "reverse") {
            this.reclamations = sorted.reverse();
            this.setState({ sorting: "sorted" })

        }
        this.setState({ updated: true })
    }


    render() {
        if (this.state.updated === false) {
            this.reclamations = this.props.content;
        }

        const { number, addDate, warranty, manufacturer, model } = this.state.columnsToShow;
        return (
            <div>
                <form>
                    <p>
                        <label htmlFor="name">Numer reklamacji</label>
                        <input
                            id="name"
                            type="checkbox"
                            name="number"
                            checked={number}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="addDate">Data dodania</label>
                        <input
                            id="addDate"
                            type="checkbox"
                            name="addDate"
                            checked={addDate}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="warranty">Gwarancyjna</label>
                        <input
                            id="warranty"
                            type="checkbox"
                            name="warranty"
                            checked={warranty}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="manufacturer">Producent</label>
                        <input
                            id="manufacturer"
                            type="checkbox"
                            name="manufacturer"
                            checked={manufacturer}
                            onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="model">Model</label>
                        <input
                            id="model"
                            type="checkbox"
                            name="model"
                            checked={model}
                            onChange={this.handleChange} />
                    </p>
                </form>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            {number &&
                                <th>numer reklamacji
                                    <span onClick={() => this.handleSort("number")}>&#8711;</span>
                                </th>}
                            {addDate &&
                                <th>data dodania
                                    <span onClick={() => this.handleSort("date")}>&#8711;</span>
                                </th>}
                            {warranty &&
                                <th>gwarancyjna
                                    <span onClick={() => this.handleSort("warranty")}>&#8711;</span>
                                </th>}
                            {manufacturer &&
                                <th>producent
                                    <span onClick={() => this.handleSort("manufacturer")}>&#8711;</span>
                                </th>}
                            {model && <th>model</th>}
                            <th>Opcje</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.reclamations.map(recl =>
                            <tr>
                                {number && <th>{recl.reclamation.number}</th>}
                                {addDate && <th>{recl.reclamation.addDate}</th>}
                                {warranty && <th>{recl.reclamation.warranty}</th>}
                                {manufacturer && <th>{recl.reclamation.manufacturer}</th>}
                                {model && <th>{recl.reclamation.model}</th>}
                                <th><Link to={`/edit/${recl.id}`}>edit</Link> -----
                            <Link to={`/details/${recl.id}`}>details</Link></th>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ReclamationsList;