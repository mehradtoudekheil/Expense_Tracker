import React from 'react'
import { CiCalendarDate , CiDark , CiBellOn } from "react-icons/ci";

function Header() {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
        <div className=''>
          <h2 className='text-xl dark:text-slate-50 font-bold'>
            Good morning mehrad 
          </h2>
          <p className='dark:text-slate-400 text-xs'>
            Here's what's happening with your finances today.
          </p>
        </div>
        <div className='flex'>
            <span className='p-2 flex text-xs dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-lg'>
                June 14, 2026  <CiCalendarDate className='ml-2 text-sm'/>
            </span>
            <button className='mx-4 p-2 flex dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-full'>
              <CiDark/>
            </button>
            <button className='p-2 flex dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-full'>
              <CiBellOn/>
            </button>
        </div>
    </div>
  )
}

export default Header