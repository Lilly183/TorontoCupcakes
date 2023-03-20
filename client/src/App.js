import React from 'react';
import './css/Global.css';

import Preloader from './components/template/Preloader';
import OffCanvasMenu from './components/OffCanvasMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './demo/Demo';

import Shop from './components/Shop';

// import Register from './components/Register';
import ShoppingCart from './components/ShoppingCart';
import Skeleton from './components/Skeleton';
import Cart from './components/Cart';


/*
——————————————————————————————————————————————————————————————————
The template prefaces each page with three components – <Preloader/>,
<OffCanvasMenu/>, and <Header/> – and ends with another component called 
<Footer/>. Anything in-between is code that's specific to any given 
component/page.
——————————————————————————————————————————————————————————————————
import Preloader from './components/template/Preloader';
import OffCanvasMenu from './components/template/OffCanvasMenu';
import Header from './components/template/Header';
——————————————————————————————————————————————————————————————————
import About from './components/template/About';
import Blog from './components/template/Blog';
import BlogDetails from './components/template/BlogDetails';
import Checkout from './components/template/Checkout';
import Class from './components/template/Class';
import Contact from './components/template/Contact';
import Home from './components/template/Home';
import Shop from './components/template/Shop';
import ShopDetails from './components/template/ShopDetails';
import ShoppingCart from './components/template/ShoppingCart';
import Wishlist from './components/template/Wishlist';
——————————————————————————————————————————————————————————————————
import Footer from './components/template/Footer';
——————————————————————————————————————————————————————————————————
*/

function App()
{
  return (
    <>
      <Preloader/>
      <OffCanvasMenu/>
      <ShoppingCart/>
      <Header/>
      {/* <Cart/>
      <Demo/> */}
      <Demo/>
      <Footer/>
    </>
  )
}

export default App;