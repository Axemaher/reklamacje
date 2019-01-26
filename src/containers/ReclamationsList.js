import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ReclamationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <ul>
                    {this.props.content.map(el =>
                        <p key={el.id}>{el.name} -- {el.sex} --
                            <Link to={`/edit/${el.id}`}>edit</Link>
                        </p>
                    )}
                </ul>
            </>
        );
    }
}

export default ReclamationsList;