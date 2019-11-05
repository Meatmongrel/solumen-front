import React from 'react'
import TodoListing from './TodoListing'

export default function TodoList(props) {

    const todos = props.todos.map(todo => {
        return <div>
            <TodoListing todo={todo}/>
        </div>
    })
    return (
        <div>
            <ul>
                {todos}
            </ul>
        </div>
    )
}
