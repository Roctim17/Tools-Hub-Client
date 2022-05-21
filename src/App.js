
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Route path='/' element={<Home></Home>}></Route>
      <Routes>

      </Routes>

    </div>
  );
}

export default App;
