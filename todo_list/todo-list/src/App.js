import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoNew = (event) => {
    event.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoTask = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, todoTask])
    setNewTodo("");
  };

  const todoCheckbox = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        // todo.complete = !todo.complete;

        const updatedTodo = { ...todo, complete: !todo.complete };
        return updatedTodo;
      }
      return todo;

    });
    setTodos(updatedTodos)
  }

  const handleTodoDelete = (delIndex) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIndex;
    });
    setTodos(filteredTodos)

  }


  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(event) => {
        handleNewTodoNew(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type='text' value={newTodo} />
        <div>
          <button>Add</button>
        </div>
      </form>
      <div>
        {
          todos.map((todo, i) => {

            return <Todo
              key={i}
              todo={todo}
              todoCheckbox={todoCheckbox}
              i={i}
              handleTodoDelete={handleTodoDelete} />
          })}

      </div>
    </div>
  );
}

export default App;
