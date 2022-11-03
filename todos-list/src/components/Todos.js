import React from 'react'
import { useState } from 'react';
import AddTask from './AddTask';
import TodoItem from './TodoItem'





const Todos = (props) => {
  
const [addTaskbtnClicked , setaddTaskbtnClicked] = useState(false)
const cancelAddTask = ()=>{
  setaddTaskbtnClicked(false);
} 
let todoStyle= {
  minHeight : "90vh"
}
  return (
    <div className='container' style={todoStyle}>
      <h1 className='text-center my-3'>My Todo Lists</h1>
      <center> <button className="btn btn-info btn-sm  p-3 m-3" onClick={() => { setaddTaskbtnClicked(true)}}>Add Task</button></center>
      {addTaskbtnClicked ? <AddTask addTask={props.addTask} cancelAddTask={cancelAddTask}/> : ""}
      {
        props.todos.length === 0 ? <div className='text-center'>No task to display<br /> Please add Some</div> :
          props.todos.map((todo)  => {
            return <React.Fragment key={todo.sno}><TodoItem todo={todo}  editTask={props.editTask}  onDelete={props.onDelete} /></React.Fragment>
          })
      }

    </div>
  )
}

export default Todos
