import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Pages/Articles';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>  </Route>
        <Route path='/articles' element={<Articles />}>  </Route>
      </Routes>




    </div>
  );
}

export default App;
