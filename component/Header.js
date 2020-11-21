import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Header() {
    const { carts } = useContext(Context);

    const className = carts.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

    return (
        <header>
            <h1>Hit Parade</h1>
            <nav>
                <ul className="header_navigation_lists">
                    <li><Link to="/">🔥 Popular Songs</Link></li>
                    <li><Link to="/styles">💗 Style</Link></li>
                    <li><Link to="/add">👨🏿 Add</Link></li>
                    <li><Link to="/cart">
                    <i className={`${className} cart`}></i>
                     Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
