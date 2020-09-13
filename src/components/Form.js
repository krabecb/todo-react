import React from 'react'

function Form(props) {
    //Here before the return you can write JS code and functions
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        props.setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        //Prevents page from refreshing when we hit enter to submit input   
        e.preventDefault()
        props.setTodos([
            //...todos: If there are already elements in the array, include them as well 
            //Removed ...todos for right now. May only be able to do ...todos if you omit typing in props by
            //changing the form function to const Form = ({setInputText, todos, setTodos}) => {}
            //{setInputText, todos, setTodos} lets you bypass writing props everytime
            {text: props.inputText, completed: false}
        ])
        //Clear state string data
        props.setInputText('')
    }
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form