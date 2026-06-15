import React from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

function Auth() {

  const {showLogin} = useContext(MyContext);
  return (
    <div className='w-full h-full flex justify-center items-center'>
     { showLogin ? <Login/> : <Register />}
    </div>
  )
}

export default Auth