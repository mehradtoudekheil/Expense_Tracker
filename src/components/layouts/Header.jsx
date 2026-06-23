import React from 'react'
import { CiCalendarDate, CiDark, CiLight } from "react-icons/ci";
import { TbLogout, TbLogin } from "react-icons/tb";
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { Link } from 'react-router-dom';
function Header() {

  const { userData, setUserData, setDark, dark } = useContext(MyContext);

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

  const themeHandler = () => {
    setDark(!dark)
  }

  return (
    <div className='w-full lg:h-16 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center'>

      {/* welcome */}
      <div className='pt-2'>
        <h2 className='text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
          Good morning {userData.userName || "Guest"}
        </h2>
        <p className='text-slate-500 dark:text-slate-400 text-xs'>
          Here's what's happening with your finances today.
        </p>
      </div>

      {/* buttons */}
      <div className='flex justify-end'>
        <span className='p-2 flex text-xs dark:text-slate-50 text-slate-500 items-center dark:bg-slate-900 bg-white border border-slate-200 dark:border-slate-800 rounded-lg'>
          {currentDate} <CiCalendarDate className='ml-2 text-sm' />
        </span>
        <button
          onClick={() => { themeHandler() }}
          className='mx-4 p-2 flex text-slate-500 dark:text-slate-50 items-center bg-white dark:bg-slate-900 border-slate-200 border dark:border-slate-800 rounded-full transition duration-300 hover:scale-110'>

          {dark ? <CiLight /> : <CiDark />}
        </button>

        {
          userData.loggedIn ? (
            <>
              {/* logout button */}
              <button
                type="button"
                onClick={logoutHandler}
                className="p-2 flex text-red-400 dark:text-red-300 cursor-pointer hover:scale-110 transition duration-300 items-center bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 rounded-full"
              >
                <TbLogout />
              </button>
            </>
          ) : (
            <>
              {/* login button */}
              <Link
                to={"/Auth"}
                className="p-2 flex text-xs text-slate-500 dark:text-slate-50 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:scale-110 transition duration-300 hover:text-green-400"
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

