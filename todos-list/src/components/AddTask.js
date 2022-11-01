import React from 'react'
import { useState } from 'react'
const AddTask = (props) => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    function submit(e) {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be blank ");
        }
        else{
            props.addTask(title,desc);
        }
    }
    return (
        <>
          <div className='my-5 p-3'>
          <form onSubmit={submit}>
                <div className="form-group m-1">
                    <label htmlFor="exampleInputEmail1">Task Title</label>
                    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="tt1"  placeholder="Enter Title"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="tt2"  placeholder="Enter Description"/>
                </div>
                <center><div className="btn-group " role="group" aria-label="Basic example">
                    <button type="submit" className="btn btn-success  my-4">Add Task</button>&nbsp;
                    <button type="button" className="btn btn-danger my-4" onClick={props.cancelAddTask} >Cancel</button>
                </div></center>
            </form>
          </div>
        </>
    )
}

export default AddTask
