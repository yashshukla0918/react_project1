import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header title="My Todos List" isSearchBar={false} />
    <Footer />
    </>
    
  );

}

export default App;
