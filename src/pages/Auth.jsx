import React from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'
import { Link } from 'react-router-dom';
import { TbHome } from "react-icons/tb";
import Alert from '../components/Alerts/Alert'
function Auth() {

  const { showLogin , alertControl } = useContext(MyContext);
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
      {showLogin ? <Login /> : <Register />}
      <Link to={"/"} className='p-2 flex text-xs dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-lg hover:scale-110 transition duration-300 top-5 left-10 absolute cursor-pointer'>
        <TbHome className='mr-2'/> Home
      </Link>
      {alertControl.show && <Alert/>}
    </div>
  )
}

export default Auth