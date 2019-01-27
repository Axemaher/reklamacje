import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fbase, firebaseApp } from '../fbase';
class ReclamationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.state.content)
        return (
            <>
                <ul>
                    {this.props.content.length ?
                        <div>
                            {this.props.content.map(el =>
                                <p key={el.id}> --
                            <Link to={`/edit/${el.id}`}>edit</Link> -----
                            <Link to={`/details/${el.id}`}>details</Link>
                                </p>
                            )}
                        </div> : "loading"
                    }
                </ul>
            </>
        );
    }
}

export default ReclamationsList;