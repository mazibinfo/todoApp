import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.todo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Add New Todo</strong></label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content} placeholder="write" />
                </form>
            </div>
        )
    }
}

export default AddTodo;

