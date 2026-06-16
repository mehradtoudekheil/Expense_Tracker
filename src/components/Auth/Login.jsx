import React from 'react'
import { CiUser, CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { useRef, useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function Login() {

  const { setShowLogin } = useContext(MyContext);

  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  return (
    <div className='w-72 h-72 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-between p-4'>
      <h1 className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-xl font-bold'>
        Sign In
      </h1>
      <form className='w-full'>

        <div className='w-full h-10 border border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <CiMail />
          </span>
          <input ref={userEmailInput} type="email" className='w-52 pl-2 outline-none text-slate-50' placeholder='Email :' />
        </div>

        <div className='w-full h-10 border border-slate-800 rounded-md flex my-4'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <IoKeyOutline />
          </span>
          <input ref={userPasswordInput} type="password" className='w-52 pl-2 outline-none text-slate-50' placeholder='Password :' />
        </div>

        <button
          className="w-full h-10 font-bold text-slate-50 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] transition-all duration-500 hover:bg-right-center hover:shadow-lg"
        >
          Sign In
        </button>

      </form>
      <p className='text-xs text-slate-400'>
        Don't have an account?<span onClick={() => setShowLogin(false)} className='cursor-pointer text-blue-500'> Sign up</span>
      </p>
    </div>
  )
}

export default Login


