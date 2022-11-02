// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import { useState } from 'react';

import { useCookies } from 'react-cookie';





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
    
  }


  const editTask= (todo,title,desc)=>{
    let editedTask= {
      sno : task_to_de_done.indexOf(todo),
      title:title,
      desc : desc
    }
    let temp = task_to_de_done.slice();
    temp.splice(task_to_de_done.indexOf(todo),1,editedTask);
    setTask_to_be_done(temp);setCookies("MyData",task_to_de_done);
  }
  const [cookies, setCookies,removeCookies] = useCookies([]);
  const [task_to_de_done, setTask_to_be_done] = useState(cookies['MyData']);
  setCookies("MyData",task_to_de_done);

  

  return (
    <>
      <Header title="My Todos List" isSearchBar={false} />
      <Todos editTask={editTask} addTask={addTask} todos={task_to_de_done} onDelete={onDelete}  />
      <Footer />
    </>

  );

}

export default App;
