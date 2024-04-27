import React from 'react';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='flex justify-around items-center bg-[#1C2B35] h-20'>
            <img src={logo} alt="" />
            <div className='text-white flex gap-3 text-lg'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;