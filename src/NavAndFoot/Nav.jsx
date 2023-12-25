import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const storedToken = localStorage.getItem('token');

  if(!storedToken){
  return (
    <>
    <div className='navBar'>
      <div className="logo">
        <h>Logo</h>
      </div>
    <div className='Links'>
    <Link to="/">Home</Link>
 <Link to="/login">Login</Link>
 <Link to="/orders">Orders</Link>
 <Link to="/products">Products</Link>
        </div>
        <div className='Profile-1'>
            <h>Profile</h>
          </div>
        </div>
    </>
  );
  }
  else{
    return (
      <>
      <div className='navBar'>
        <div className="logo">
          <h>Logo</h>
        </div>
      <div className='Links-1'>
      <Link to="/">Home</Link>
   <Link to="/orders">Orders</Link>
   <Link to="/products">Products</Link>
   <Link to="/login" className='hidden'>Login</Link>
          </div>
  
          <div className='Profile'>
            <h>Profile</h>
          </div>
          </div>
      </>
    );
  }
};

export default NavBar;
