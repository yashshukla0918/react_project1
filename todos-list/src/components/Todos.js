import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
 
  return (
    <div className='container'>
      <h1 className='text-center my-5'>My Todo Lists</h1>
      
      {props.todos.map((todo)=>{
        return <><TodoItem  todo={todo} key={todo.sno}/></>
      })}
    </div>
  )
}

export default Todos
