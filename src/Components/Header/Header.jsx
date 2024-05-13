import React, { useContext } from 'react';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then(result =>{ })
        .catch(error => console.log(error));
    }

    return (
        <nav className='flex justify-around items-center bg-[#1C2B35] h-20'>
            <img src={logo} alt="" />
            <div className='text-white flex gap-3 text-lg'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span>Welcome  {user.email}
                    <button onClick={handleLogOut} className="btn btn-xs ml-5">Log Out</button>
                    </span>
                }
            </div>
        </nav>
    );
};

export default Header;