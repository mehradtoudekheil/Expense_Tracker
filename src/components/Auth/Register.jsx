import React from 'react'
import { CiUser , CiMail  } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { useRef , useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function Register() {

  const {setShowLogin} = useContext(MyContext);

  const userNameInput = useRef();
  const userEmailInput = useRef();
  const userPasswordInput = useRef();
  const userConfirmPasswordInput = useRef();


  return (
    <div className='w-72 h-96 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-between p-4'>
      <h1 className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-xl font-bold'>
        Sign Up
      </h1>
      <form className='w-full'>

        <div className='w-full h-10 border border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <CiUser />
          </span>
          <input ref={userNameInput} type="text" className='w-52 pl-2 outline-none text-slate-50' placeholder='Name :' />
        </div>

        <div className='w-full h-10 border border-slate-800 rounded-md flex my-4'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <CiMail />
          </span>
          <input ref={userEmailInput} type="email" className='w-52 pl-2 outline-none text-slate-50' placeholder='Email :' />
        </div>

        <div className='w-full h-10 border border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <IoKeyOutline />
          </span>
          <input ref={userPasswordInput} type="password" className='w-52 pl-2 outline-none text-slate-50' placeholder='Password :' />
        </div>

        <div className='w-full h-10 border my-4 border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r dark:text-slate-50 border-slate-800 flex justify-center items-center'>
            <IoKeyOutline />
          </span>
          <input ref={userConfirmPasswordInput} type="password" className='w-52 pl-2 outline-none text-slate-50' placeholder='Confirm Password :' />
        </div>
        <button className='w-full h-10 font-bold text-slate-50 bg-linear-to-r from-blue-500 to-purple-500 rounded-md'>
          Sign Up
        </button>
      </form>
      <p className='text-xs text-slate-400'>
        Already have an account? <span onClick={()=>setShowLogin(true)} className='cursor-pointer text-blue-500'> Sign in</span>
      </p>
    </div>
  )
}

export default Register