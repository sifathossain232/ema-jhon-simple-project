import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

const Login = () => {
    const [show, setShow] = useState(false);


    const {signIn} = useContext(AuthContext)
    const naviget = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            naviget(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
        })
        
    }

    return (
        <div className='flex justify-center mt-5'>
            <div className='flex flex-col items-center w-[500px] h-[600px] border border-[#95A0A7] rounded-lg'>
                <div className='font-sans text-4xl font-normal leading-10 tracking-wide text-[#2A414F] p-5'>
                    <h2>Login</h2>
                </div>
                <div>
                    <form onSubmit={handleLogin} className='relative'>
                        <div className=''>
                            <label className='block mb-2 text-lg leading-5 text-[#2A414F]' htmlFor="email">Email</label>
                            <input className='w-[415px] h-14 border border-[#95A0A7] rounded-md text-xl pl-5 outline-none' type="email" name="email" id="email" required />
                        </div>
                        <div className=' mt-5'>
                            <label className='block mb-2 text-lg leading-5 text-[#2A414F]' htmlFor="password">Password</label>
                            <input className='w-[415px] h-14 border border-[#95A0A7] rounded-md text-xl pl-5 outline-none' type={show ? "text" : "password"} name="password" id="password" required />
                            <p onClick={() => setShow(!show)} className='absolute bottom-24 left-96'>
                                {
                                    show ? <PiEye /> : <PiEyeClosed />
                                }
                            </p>
                        </div>
                        <input className='w-[415px] h-14 rounded-md text-xl pl-5 outline-none bg-[#FDC167] mt-5 cursor-pointer text-[#0E161A] hover:bg-[#FF9900]' type="submit" value="Login" />
                    </form>
                    <p className='flex justify-center mt-2'>New to Ema-jhon?  <Link className='text-[#FF9900]' to='/signup'> Create New Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;