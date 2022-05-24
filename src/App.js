
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase';

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes>

    </div>
  );
}

export default App;
