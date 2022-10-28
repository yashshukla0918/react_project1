import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {
  let task_to_de_done = [
    {
      sno:"1",
      title: "Task 1",
      desc : "Make a quick report of Employee"
    },
    
    {
      sno:"2",
      title: "Task 2",
      desc : "Divide all dividend to the stack holder"
    }
    ,
    {
      sno:"3",
      title: "Task 3",
      desc : "Make a excel sheet for eye patients"
    }
    ,
    {
      sno:"4",
      title: "Task 4",
      desc : "Make sure every doctor is comfortable here"
    }
  ]
  return (
    <>
    <Header title="My Todos List" isSearchBar={false} />
    <Todos  todos={task_to_de_done}/>
    {/* <Footer /> */}
    </>
    
  );

}

export default App;
