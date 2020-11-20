import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Hit Parade</h1>
            <nav>
                <ul className="header_navigation_lists">
                    <li><Link to="/">🔥 Popular Songs</Link></li>
                    <li><Link to="/styles">💗 Style</Link></li>
                    <li><Link to="/add">👨🏿 Add</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
