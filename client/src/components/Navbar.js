import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () =>
{
    const links =
    [
        {id: 1, route: "/", label: "Home"},
        {id: 2, route: "/Shop", label: "Shop"},
        {id: 3, route: "/Contact", label: "Contact"},
        {id: 4, route: "/About", label: "About"},
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            {links.map((linkItem) =>
                                <li key={linkItem.id}>
                                    <NavLink className={({ isActive }) => isActive ? "active" : null} to={linkItem.route}>{linkItem.label}</NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;