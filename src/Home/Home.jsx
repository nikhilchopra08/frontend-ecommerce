import React from 'react'
import Login from '../Login/login'
import Hero from './Hero'
import AddProducts from './Display'
import Products from './Products'
import Orders from '../Orders/Orders'
import ProductsPage from '../ProductsPage/ProductsPage'
import Category from './Category'
import './Home.css'

const Home = () => {
  return (
   <>
      <Hero/>
      <Category/>
      <Products props="Home" />
      <Products props="Home" />
   </>
  )
}

export default Home