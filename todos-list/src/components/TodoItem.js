import React from 'react'

const TodoItem = ({ todo,onDelete }) => { 
    return (
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-4'>
                <h3>{todo.title}</h3>
                <p className='mx-2'>-{todo.desc}</p>
            </div>
            <div className='col-1'>
                {/* <button className='btn btn-danger btn-sm my-4'> DELETE</button>
                <button className='btn btn-warning btn-sm '> Edit </button> */}
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning btn-sm my-4">Edit</button>&nbsp;
                    <button type="button" className="btn btn-danger btn-sm my-4" onClick={()=>{onDelete(todo)}}>Delete</button>
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default TodoItem