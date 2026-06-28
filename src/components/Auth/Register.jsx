import React from 'react'
// import { CiUser, CiMail } from "react-icons/ci";
// import { IoKeyOutline } from "react-icons/io5";
import { useContext, useRef, useEffect, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { User , Mail , KeyRound , Eye , EyeOff } from "lucide-react"

function Register() {

  // show password
  const [showPassword, setShowPassword] = useState(false);

  // go to home after SignUp 
  const navigate = useNavigate();

  // get inputs value
  const userEmailInput = useRef();
  const userPasswordInput = useRef();
  const userConfirmPasswordInput = useRef();
  const userNameInput = useRef();

  // get Context info
  const { setUserData, setUserItem, registeredUsers, setShowLogin, setAlertControl } = useContext(MyContext);

  // get input value and check it func
  const RegisterHandler = (e) => {
    e.preventDefault();

    // get inputs values
    const userName = userNameInput.current.value;
    const password = userPasswordInput.current.value;
    const email = userEmailInput.current.value;
    const confirmPassword = userConfirmPasswordInput.current.value;

    // regexp
    const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // check email correctness
    if (!emailRegex.test(email)) {
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["Email is not valid"]
        }
      )
      return;
    }
    // check Name Correctness
    if (!userNameRegex.test(userName)) {
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["Username is not valid"]
        }
      )
      return;
    }
    // Check password correctness
    if (!passwordRegex.test(password)) {
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["Password is not valid"]
        }
      )
      return;
    }
    // verify password
    if (!passwordRegex.test(confirmPassword) || password !== confirmPassword) {
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["Password dose not match with Confirm Password"]
        }
      )
      return;
    }
    checkUserExistence(userName, email, password);
    console.log(email + userName + password);

  }

  // check user existence in registerd Users list
  const checkUserExistence = (userName, email, password) => {

    if (registeredUsers.users.find((user) => user.email === email)) {
      console.log("exist");
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["Email already exists"]
        }
      )
      return;
    }
    registerUser(userName, email, password);

  }

  // register user finaly 
  const registerUser = (userName, email, password) => {
    console.log("logged in");


    // add to registered list 
    setUserItem(
      {
        userName: userName,
        email: email,
        password: password,
        role: "user",
        theme: "dark",
      }
    )
    // login with user
    setUserData({
      loggedIn: true,
      userName: userName,
      password: password,
      theme: "dark",
      role: "user",
    })

    // show login success message
    setAlertControl({
      show: true,
      type: "SUCCESS",
      messages: ["You Are Logged In."],
    });

    // redirect to home page after 1 second
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }



  return (
    <div className='w-72 h-96 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-between p-4'>
      <h1 className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-xl font-bold'>
        Sign Up
      </h1>
      <form 
      onSubmit={RegisterHandler}
      className='w-full'>

        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <User size={18}/>
          </span>
          <input ref={userNameInput} type="text" className='w-52 pl-2 outline-none text-slate-900 dark:text-slate-50' placeholder='Name :' />
        </div>

        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex my-4'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <Mail  size={18}/>
          </span>
          <input ref={userEmailInput} type="email" className='w-52 pl-2 outline-none text-slate-900 dark:text-slate-50' placeholder='Email :' />
        </div>
        {/* password */}
        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <KeyRound size={18} />
          </span>
          <input ref={userPasswordInput}
            type={showPassword ? "text" : "password"}
            className='w-48 pl-2 outline-none text-slate-900 dark:text-slate-50'
            placeholder='Password :'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='w-8 h-10 cursor-pointer border-l dark:text-slate-50 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            {showPassword ? <EyeOff size={18} className="text-slate-400" /> : <Eye size={18} className="text-slate-400" />}
          </button>
        </div>

        {/* confirm pass */}
        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex my-4'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <KeyRound size={18} />
          </span>
          <input ref={userConfirmPasswordInput}
            type={showPassword ? "text" : "password"}
            className='w-48 pl-2 outline-none text-slate-900 dark:text-slate-50'
            placeholder='Confirm Password :'
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='w-8 h-10 cursor-pointer border-l dark:text-slate-50 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            {showPassword ? <EyeOff size={18} className="text-slate-400" /> : <Eye size={18} className="text-slate-400" />}
          </button>
        </div>

        <button type='submit'  
        className='w-full h-10 font-bold text-slate-50 bg-linear-to-r from-blue-500 to-purple-500 rounded-md'>
          Sign Up
        </button>
      </form>
      <p className='text-xs text-slate-400'>
        Already have an account? <span onClick={() => setShowLogin(true)} className='cursor-pointer text-blue-500'> Sign in</span>
      </p>
    </div>
  )
}

export default Register

