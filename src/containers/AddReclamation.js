import React, { Component } from 'react';

class AddReclamation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <button onClick={() => this.props.handleAdd({ name: "Krysia", sex: "female", id: "325" })}>Add text</button>
            </>
        );
    }
}

export default AddReclamation;