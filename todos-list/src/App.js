// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import { useState } from 'react';



function App() {

  const onDelete = (todo) => {
    setTask_to_be_done(task_to_de_done.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTask = (title,desc)=>{
    let sno = task_to_de_done.length;
    let myTask = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTask_to_be_done([...task_to_de_done,myTask]);
    console.log(myTask);
  }



  const [task_to_de_done, setTask_to_be_done] = useState(
    [
      {
        sno: 0,
        title: "Task 1",
        desc: "Make a quick report of Employee"
      },

      {
        sno: 1,
        title: "Task 2",
        desc: "Divide all dividend to the stack holder"
      }
      ,
      {
        sno: 2,
        title: "Task 3",
        desc: "Make a excel sheet for eye patients"
      }
      ,
      {
        sno: 3,
        title: "Task 4",
        desc: "Make sure every doctor is comfortable here"
      }
    ]
  );

  return (
    <>
      <Header title="My Todos List" isSearchBar={false} />
      <Todos addTask={addTask} todos={task_to_de_done} onDelete={onDelete}  />
      <Footer />
    </>

  );

}

export default App;
