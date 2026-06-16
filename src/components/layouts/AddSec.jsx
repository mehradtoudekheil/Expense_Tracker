import React from 'react'
import { FaPlus } from "react-icons/fa";
import AddTransaction from '../Forms/AddTransaction';


function AddSec() {
  return (
    <div className='col-span-3 h-full p-4'>
        <div className='h-full w-full bg-slate-900 rounded-xl border border-slate-800 px-4 '>
            <header className='flex items-center border-b border-slate-800 py-4'>
              
              <span className='w-10 h-10 bg-blue-500 text-slate-50 flex justify-center items-center rounded-md'>
                <FaPlus/>
              </span>
              <h3 className='text-slate-50 text-md ml-2'>
                Add New Transaction
              </h3>
            </header>
            <AddTransaction/>
        </div>
    </div>
  )
}

export default AddSec