import React, {useState} from 'react'
import './App.css'

function Form({addTodo}) {
  const [value, setValue] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
       <h2>TODO APP</h2>
      <div className="col-75">
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Todo..."/>
      </div>
       <div>
        <input type="submit" value="ADD"/>
    </div>
  </form>
  )
}

export default Form