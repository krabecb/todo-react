import React from 'react'
//Import Components
import Todo from './Todo'

const ToDoList = ({todos}) => {
    //When user provides input and submits, the console log shows what props.todos looks like and how
    //we can grab that information
    // console.log(props.todos) 

    //{} inside the return allow us to write JS code
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList