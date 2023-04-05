import React from 'react';
import '../css/Navbar.css'

const Navbar = () => 
{
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <nav className="header__menu mobile-menu">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li className="active"><a href="./products.html">Products</a>
                            {/* <ul className="dropdown">
                                <li><a href="/">Always Available</a></li>
                                <li><a href="/">Holidays</a></li>
                                <li><a href="/">Special Events</a></li>
                                <li><a href="/">Custom</a></li>
                            </ul> */}
                        </li>
                        <li><a href="./contact.html">Contact</a></li>
                        <li><a href="./about.html">About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar;