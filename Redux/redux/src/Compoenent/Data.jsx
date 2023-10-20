import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { removeTodo } from '../Feature/TodoSlice'
const Data = () => {
  const task=  useSelector(state =>state.todo)
  const dispatch=useDispatch()
  const handleRemove=(id)=>{
    dispatch(removeTodo(id))
  }
  console.log(task)
  return (
    <React.Fragment>
        <div className="container">
          {task.map((todo)=>(
            <ul key={todo.id}>
              {todo.task}
              <button onClick={()=>handleRemove(todo.id)}>delete</button>
            </ul>
          ))}
        </div>
    </React.Fragment>
  )
}

export default Data
