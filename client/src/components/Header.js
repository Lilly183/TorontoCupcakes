import React from 'react';
import Navbar from './Navbar';
import '../css/Header.css'
import { Link } from 'react-router-dom';

import { CartState } from '../context/Context';
import ShoppingCart from './ShoppingCart';

const Header = () => 
{
    const { state: { cart } } = CartState();

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header__top__inner d-flex align-items-center">
                                <div className="header__logo">
                                    <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="Logo"/></Link>
                                </div>
                                <div className="ms-auto d-flex align-items-center">
                                    <div className="header__top__right me-4">
                                        <ul>
                                            <li><a href="/">Account</a>&nbsp;<span className="arrow_carrot-down"></span>&nbsp;&emsp;
                                                <ul>
                                                    <Link to="Login"><li>Login</li></Link>
                                                    <Link to="Register"><li>Register</li></Link>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown" id="shoppingCartDropdown">
                                        <div className="dropdown-toggle" type="button" id="shoppingCartDropdownToggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"/>
                                            { cart.length > 0 && 
                                            <span className="cart__item__count text-center">{cart.length}</span>
                                            }
                                        </div>
                                        <ShoppingCart/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;