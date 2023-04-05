import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => 
{
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <nav className="header__menu mobile-menu">
                    <ul>
                        <li className="active"><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink>
                        {/* <ul className="dropdown">
                            <li><NavLink to="/">Always Available</NavLink></li>
                            <li><NavLink to="/">Holidays</NavLink></li>
                            <li><NavLink to="/">Special Events</NavLink></li>
                            <li><NavLink to="/">Custom</NavLink></li>
                        </ul> */}
                        </li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar;