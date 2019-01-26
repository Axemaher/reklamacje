import React, { Component } from 'react';
class DetailsReclamation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {}
        }
        this.id = this.props.match.params.id;
        this.stateFromProps = this.props.content.filter(el => el.id === this.id)[0];

    }
    handleChange = (e) => {
        this.setState({
            content: {
                ...this.state.content, [e.target.name]: e.target.value
            }
        })
    }
    componentWillMount() {
        this.setState({
            content: this.stateFromProps
        })
        console.log(this.stateFromProps)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const editedData = this.state.content;
        this.props.handleEdit(editedData);

    }
    render() {
        console.log(this.state.content)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name:
                    <input
                            type="text"
                            value={this.state.content.name}
                            name="name"
                            onChange={this.handleChange} />
                    </label><br />
                    <label>
                        sex:
                    <input
                            type="text"
                            name="sex"
                            value={this.state.content.sex}
                            onChange={this.handleChange} />
                    </label><br />
                    <input type="submit" value="save" />
                </form>
            </>
        );
    }
}

export default DetailsReclamation;