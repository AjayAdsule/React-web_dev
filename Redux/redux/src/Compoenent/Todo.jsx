import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Feature/TodoSlice'
const Todo = () => {
  const dispatch=useDispatch()
  const [task,setTask]=useState()
  const handleTask=(e)=>{
    e.preventDefault()
    dispatch(addTodo(task))
    setTask("")
  }
  return (
    <React.Fragment>
      <div className="container">
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleTask}>Submit</button>
      </div>
    </React.Fragment>
  )
}

export default Todo
