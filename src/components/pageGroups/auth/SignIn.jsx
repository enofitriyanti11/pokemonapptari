import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignIn = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/login', { email, password })
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        // screen
        <div className='flex w-full  lg:w-full h-screen  items-center justify-center'>
            {/* screen dalam */}
            <div className=' flex bg-white/50 px-10 py-20 rounded-3xl '>
                {/* form login */}
                <div className='pl-20 md:pr-10'>
                    <h1 className='text-3xl font-extrabold text-center py-8 text-slate-600'>SIGN IN</h1>
                    <img src="/img/icon6.jpg" alt="" className='md:hidden rounded-3xl py-5' />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='text-sm font-medium text-slate-600'>Email</label>
                            <input value={email} onChange={handleEmailChange}
                                type='email' id='email' name='email'
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1'
                                placeholder='emailaddres@gmail.com' />
                        </div>
                        <div className='pt-3'>
                            <label htmlFor='password' className='text-sm font-medium text-slate-600'>Password</label>
                            <input value={password} onChange={handlePasswordChange}
                                type='password' id='password' name='password'
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1'
                                placeholder='********' />
                        </div>
                        <button className='pt-2 font-medium text-xs text-[#70928e] hover:text-[#5f6060]'>Forgot Password</button>

                        {/* BUTTON */}
                        <div className='flex flex-col gap-y-4 py-10'>
                            <button type='submit'
                                className="bg-[#b1ced8] rounded-xl  py-[5px] mr-2 hover:bg-[#deedec] text-slate-600 font-semibold" >
                                Sign In
                            </button>
                            <Link to="/SignUp">
                                <button className='font-semibold text-xs text-[#83a9a5] hover:text-[#5f6060]'>
                                    Don't have an account?
                                    <span className='font-extrabold'>Sign Up</span>
                                </button>
                            </Link>

                        </div>
                    </form>



                </div>

                {/* img login */}
                <div className='px-10 flex items-center'>
                    <img src="/img/icon6.jpg" alt="" className='hidden md:block rounded-2xl md:w-[43rem]' />

                </div>

            </div>
            {/* screen dalam */}
        </div>
    )
}

export default SignIn