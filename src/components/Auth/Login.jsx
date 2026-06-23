import React from 'react'
import { CiUser, CiMail } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { useRef, useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Login() {

  // get Context info
  const { setShowLogin, registeredUsers, setAlertControl, setUserData } = useContext(MyContext);

  // show password
  const [showPassword, setShowPassword] = useState(false);
  // go to home after Login
  const navigate = useNavigate();

  // get input value eith ref
  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  // get inputs and check them func
  const loginHandler = () => {
    const email = userEmailInput.current.value;
    const password = userPasswordInput.current.value;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;


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
    if (!passwordRegex.test(password)) {
      setAlertControl(
        {
          show: true,
          type: "ERROR",
          messages: ["password in not valid"]
        }
      )
      return;
    }
    checkUserValidity(email, password);

  };

  // check user and pass correctness
  const checkUserValidity = (email, password) => {

    const myUser = registeredUsers.users.find((user) => user.email === email);

    if (myUser) {
      if (myUser.password === password) {
        setLoginUser(email, password);
      } else {
        setAlertControl({
          show: true,
          type: "ERROR",
          messages: ["Password is incorrect"],
        });
      }
    } else {
      setAlertControl({
        show: true,
        type: "ERROR",
        messages: ["Email does not exist"],
      });
    }
  };

  // finaly Login with user
  const setLoginUser = (email, password) => {

    // find user for userName
    const myUser = registeredUsers.users.find(
      (user) => user.email === email
    );

    setUserData({
      loggedIn: true,
      userName: myUser.userName, // 👈 اینجا اسم کاربر
      email: myUser.email,
      password: password,
      theme: "light",
      role: "user",
    });

    setAlertControl({
      show: true,
      type: "SUCCESS",
      messages: ["You Are Logged In."],
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };


  return (
    <div className='w-72 h-72 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-between p-4'>
      <h1 className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-xl font-bold'>
        Sign In
      </h1>
      <form className='w-full'>

        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-50 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <CiMail />
          </span>
          <input ref={userEmailInput} type="email" className='w-52 pl-2 outline-none text-slate-900 dark:text-slate-50' placeholder='Email :' />
        </div>


        <div className='w-full h-10 border border-slate-200 dark:border-slate-800 rounded-md flex my-4'>
          <span className='w-8 h-10 border-r text-slate-500 dark:text-slate-50 border-slate-200 dark:border-slate-800 flex justify-center items-center'>
            <IoKeyOutline />
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
            {showPassword ? <FaEyeSlash className="text-slate-400" /> : <FaEye className="text-slate-400" />}
          </button>
        </div>


        <button
          type='button'
          onClick={loginHandler}
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


