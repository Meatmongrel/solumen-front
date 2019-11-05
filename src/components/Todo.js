import React, { Component } from 'react'
import TodoList from './TodoList'

export default class Todo extends Component {
    state = {
        todos: [],
        newTodo: ''
    }

    handleChange = event => {
        this.setState({ newTodo: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const { todos, newTodo } = this.state
        this.setState({ todos: [...todos, newTodo]})
        console.log(todos)
        this.setState({ newTodo: ''})
    }
    render() {
        return (
            <div className='todo'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='What are you feeling' value={this.state.newTodo} onChange={this.handleChange}></input>
                    <input type='submit' value='Add thought'></input>
                </form>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}
