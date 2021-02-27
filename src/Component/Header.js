import React from 'react';
import logo from '../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <img  src={logo} alt="" className="Center"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Directory</a>
            </nav>
        </div>
    );
};

export default Header;