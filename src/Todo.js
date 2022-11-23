import React, { useState } from 'react';
import Form from './Form';
import './App.css'

function Todo() {
  const [todos, setTodos] = useState([
    { text: 'Reading', isDone: false },
    { text: 'Dancing', isDone: false },
    { text: 'Cooking', isDone: true },
  ]);

  
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isDone:false }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <Form addTodo={addTodo} />
      </div>
      <h3 style={{textAlign:'center', marginBottom:-10}}>List of Tasks</h3>
      <div className = 'table_responsive'>
      <table>
        <thead>
          <tr>
            <th>List of Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        {todos.map((todo, index) => (
          <tbody key={index}>
            <tr>
              <td style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
                {todo.text}
              </td>
              <td>
                <span className='action_btn'>
                <button className='btn1'
                  type="button"
                  color="primary"
                  onClick={() => markTodo(index)}
                >
                  ✓
                </button>
                <button className='btn2'
                  type="button"
                  color="danger"
                  onClick={() => removeTodo(index)}
                >
                  ✕
                </button>
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      </div>
      <div className = 'table_responsive'>
      <table>
        <thead>
          <tr>
            <th>List of Completed Tasks</th>
          </tr>
        </thead>
        {todos.map((todo, index) => todo.isDone === true && 
          (<tbody key={index}>
            <tr>
              <td>
                {todo.text}
              </td>
            </tr>
          </tbody>
          )
        )}
      </table>
      </div>
      <div className = 'table_responsive'>
      <table>
        <thead>
          <tr>
            <th>List of Pending Tasks</th>
          </tr>
        </thead>
        {todos.map((todo, index) => todo.isDone === false && (
          <tbody key={index}>
            <tr>
              <td>
                {todo.text}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      </div>
    </div>
  );
}

export default Todo;
