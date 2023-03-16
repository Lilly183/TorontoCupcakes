import React from 'react';
import imgRelPath from './template/ImgRelPath';
import '../css/OffCanvasMenu.css';

const OffCanvasMenu = () => 
{
  return (
    <div>
        <div className="offcanvas-menu-overlay"></div>

        <div className="offcanvas-menu-wrapper p-4">
            {/* <div className="offcanvas__cart">
                <div className="offcanvas__cart__links">
                    <a href="/" className="search-switch"><img src={imgRelPath + "icon/search.png"} alt=""/></a>
                    <a href="/"><img src={imgRelPath + "icon/heart.png"} alt=""/></a>
                </div>
                <div className="offcanvas__cart__item">
                    <a href="/"><img src={imgRelPath + "icon/cart.png"} alt=""/> <span>0</span></a>
                    <div className="cart__price">Cart: <span>$0.00</span></div>
                </div>
            </div> */}
            {/* <div></div> */}
            <div className="offcanvas__logo text-center">
                <a href="./index.html"><img src={imgRelPath + "logo.png"} alt=""/></a>
            </div>
            <div id="mobile-menu-wrap" className="mb-4 text-center"></div>
            <div className="offcanvas__option mb-4 pb-1 text-center">
                {/* <ul>
                    <li>USD <span className="arrow_carrot-down"></span>
                        <ul>
                            <li>EUR</li>
                            <li>USD</li>
                        </ul>
                    </li>
                    <li>ENG <span className="arrow_carrot-down"></span>
                        <ul>
                            <li>Spanish</li>
                            <li>ENG</li>
                        </ul>
                    </li>
                    <li><a href="/">Sign in</a> <span className="arrow_carrot-down"></span></li>
                    <li><a href="/">Sign in</a> <span className="arrow_carrot-down"></span></li>
                </ul> */}
                <ul className="row">
                    <li className="p-2 ms-1 me-0"><a href="/">Login</a></li>
                    <li className="p-2 ms-1"><a href="/">Register</a></li>
                </ul>
            </div>
            <div className="pt-2 text-center">
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"/>
            </div>
        </div>
    </div>
  )
}

export default OffCanvasMenu;