import React from 'react'
import { CiCalendarDate, CiDark } from "react-icons/ci";
import { TbLogout, TbLogin } from "react-icons/tb";
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { Link } from 'react-router-dom';
function Header() {

  const { userData, setUserData } = useContext(MyContext);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const logoutHandler = () => {
    setUserData({
      loggedIn: false,
      username: "",
      password: "",
      theme: "light",
      role: "user",
    })
  }

  return (
    <div className='w-full h-16 flex justify-between items-center'>
      <div className=''>
        <h2 className='text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
          Good morning {userData.userName || "Guest"}
        </h2>
        <p className='dark:text-slate-400 text-xs'>
          Here's what's happening with your finances today.
        </p>
      </div>
      <div className='flex'>
        <span className='p-2 flex text-xs dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-lg'>
          {currentDate} <CiCalendarDate className='ml-2 text-sm' />
        </span>
        <button className='mx-4 p-2 flex dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-full'>
          <CiDark />
        </button>

        {
          userData.loggedIn ? (
            <>
              {/* logout button */}
              <button
                type="button"
                onClick={logoutHandler}
                className="p-2 flex dark:text-red-300 cursor-pointer hover:scale-110 transition duration-300 items-center bg-slate-900 border border-slate-800 rounded-full"
              >
                <TbLogout />
              </button>
            </>
          ) : (
            <>
              {/* login button */}
              <Link
                to={"/Auth"}
                className="p-2 flex text-xs dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-lg hover:scale-110 transition duration-300 hover:text-green-300"
              >
                Sign Up <TbLogin className="ml-2 text-sm" />
              </Link>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Header

