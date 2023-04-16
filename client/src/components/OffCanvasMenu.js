import React from 'react';
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';
import '../css/OffCanvasMenu.css';

const OffCanvasMenu = () => 
{
    const { state: { cart } } = CartState();

    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper p-4">
                <div className="offcanvas__logo text-center">
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt=""/></Link>
                </div>
                <div id="mobile-menu-wrap" className="mb-4 text-center"></div>
                <div className="offcanvas__option mb-4 pb-1 text-center">
                    <ul className="row">
                        <li className="p-2 ms-1 me-0"><Link to="/Login">Login</Link></li>
                        <li className="p-2 ms-1"><Link to="/Register">Register</Link></li>
                    </ul>
                </div>
                <div className="pt-2 text-center position-relative">
                    <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"/>
                    { cart.length > 0 && 
                        <span className="cart__item__count offcanvas__cart__item__count text-center">{cart.length}</span>
                    }
                </div>
            </div>
        </>
    )
}

export default OffCanvasMenu;