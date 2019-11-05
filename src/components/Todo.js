import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        todos: [],
        newTodo: ''
    }

    handleChange = event => {
        this.setState({ newTodo: event.target.value})
    }
    handleSubmit = event => {
        const { todos, newTodo } = this.state
        event.preventDefault()
        this.setState({ ...todos, newTodo})
        return <li>
            this.state.newTodo
        </li>
    }
    render() {
        return (
            <div className='todo'>
                <ul>
                    <li>Deep breaths</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='What are you feeling' value={this.state.newTodo} onChange={this.handleChange}></input>
                    <input type='submit' value='Add thought'></input>
                </form>
            </div>
        )
    }
}
