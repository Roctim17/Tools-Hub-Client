
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './Components/Header';
import AddProduct from './Dashboard/AddProduct';
import Dashboard from './Dashboard/Dashboard';
import ManageAllOrders from './Dashboard/ManageAllOrders';
import ManageProducts from './Dashboard/ManageProducts';
import MyOrder from './Dashboard/MyOrder';
import MyProfile from './Dashboard/MyProfile';
import MyReview from './Dashboard/MyReview';
import User from './Dashboard/User';
import NotFound from './pages/404/NotFound';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Signup from './pages/Login/Signup';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Purchase from './pages/Purchase';

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<User></User>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
