import React, { useState } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
