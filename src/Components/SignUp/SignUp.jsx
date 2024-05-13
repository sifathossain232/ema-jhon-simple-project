import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        
        setError('');
        if(password !== confirm){
            setError("Your password don't match")
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)
        })
        
    }

    return (
        <div className='flex justify-center mt-5'>
            <div className='flex flex-col items-center w-[500px] h-[600px] border border-[#95A0A7] rounded-lg'>
                <div className='font-sans text-4xl font-normal leading-10 tracking-wide text-[#2A414F] p-5'>
                    <h2>Sign Up</h2>
                </div>
                <div>
                    <form onSubmit={handleSignUp}>
                        <div className=''>
                            <label className='block mb-2 text-lg leading-5 text-[#2A414F]' htmlFor="email">Email</label>
                            <input className='w-[415px] h-14 border border-[#95A0A7] rounded-md text-xl pl-5 outline-none' type="email" name="email" id="email" required />
                        </div>
                        <div className=' mt-5'>
                            <label className='block mb-2 text-lg leading-5 text-[#2A414F]' htmlFor="password">Password</label>
                            <input className='w-[415px] h-14 border border-[#95A0A7] rounded-md text-xl pl-5 outline-none' type="password" name="password" id="password" required />
                        </div>
                        <div className=' mt-5'>
                            <label className='block mb-2 text-lg leading-5 text-[#2A414F]' htmlFor="confirm">Confirm Password</label>
                            <input className='w-[415px] h-14 border border-[#95A0A7] rounded-md text-xl pl-5 outline-none' type="password" name="confirm" id="confirm" required />
                        </div>
                        <p className='text-red-400'>{error}</p>
                        <input className='w-[415px] h-14 rounded-md text-xl pl-5 outline-none bg-[#FDC167] mt-5 cursor-pointer text-[#0E161A] hover:bg-[#FF9900]' type="submit" value="Sign Up" />
                    </form>
                    <p className='flex justify-center'>Already have an acccount? <Link className='text-[#FF9900]' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;