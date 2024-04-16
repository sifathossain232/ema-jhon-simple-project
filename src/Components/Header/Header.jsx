import React from 'react';
import './Header.css';
import logo from '../images/Logo.png';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;