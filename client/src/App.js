import React from 'react';
import Register from './components/Register';

/*
The template prefaces each page with three components – <Preloader/>,
<OffCanvasMenu/>, and <Header/> – and ends with another component called 
<Footer/>. Anything in-between is code that's specific to any given 
component/page.

  import Preloader from './components/Template/Preloader';
  import OffCanvasMenu from './components/Template/OffCanvasMenu';
  import Home from './components/Template/Home';
  import Header from './components/Template/Header';
  import Footer from './components/Template/Footer';
*/

function App()
{
  return (
    <div>
      <Register/>
    </div>
  )
}

export default App;