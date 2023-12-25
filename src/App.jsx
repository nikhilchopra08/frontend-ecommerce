import { useState } from 'react'
import './App.css'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavAndFoot/Nav';
import Footer from './NavAndFoot/Footer';
import ProductsPage from './ProductsPage/ProductsPage';
import Orders from './Orders/Orders';
import Login from './Login/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>
<div>
  <NavBar />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/products" element={< ProductsPage/>} />
    <Route exact path="/orders" element={<Orders />} />
  </Routes>
  <Footer/>
</div>
</Router>
    </>
  )
}

export default App
