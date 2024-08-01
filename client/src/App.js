import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './css/Global.css';

// import Preloader from './components/Preloader';
import OffCanvasMenu from './components/OffCanvasMenu';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App()
{
  return (
    <BrowserRouter>
      {/* <Preloader/> */}
      <OffCanvasMenu/>
      <Header/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;