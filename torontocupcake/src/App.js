import React from 'react';
import Preloader from './components/Preloader';
import OffCanvasMenu from './components/OffCanvasMenu';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

//Welcome to the future home of Toronto Cupcake!

const App = () => 
{
  return (
  <div>
    <Preloader/>
    <OffCanvasMenu/>
    <Header/>
    <Home/>
    {/* <Shop/> */}
    <Footer/>
  </div>
  )
}

export default App;
