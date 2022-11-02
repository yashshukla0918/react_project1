import React from 'react'
import { useState } from 'react';
const EditTask = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description cannot be blank ");
        }
        else {
            props.editTask(props.todo,title,desc);
        }
    }

  return (
    <div className='m-3'>
         <div className="form-group m-1">
                        <label htmlFor="exampleInputEmail1">Task Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="tt1" placeholder={props.todo.title} />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Task Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="tt2" placeholder={props.todo.desc} />
                    </div>
                    <center><button className="btn btn-sm btn-success " onClick={submit}>Update Task</button></center>
    </div>
  )
}

export default EditTask
