import React from 'react'
import { FaPlus , FaRegTimesCircle } from "react-icons/fa";
import AddTransaction from '../Forms/AddTransaction';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function AddSec() {

const {showAdd , setShowAdd} = useContext(MyContext);

  return (
    <div className={`lg:block col-span-1 lg:col-span-3 h-full p-4 ${showAdd ? "block absolute lg:relative top-0 left-0 z-1000" : "hidden"}`}>
        <div className='h-full w-full bg-slate-900 rounded-xl border border-slate-800 px-4 '>
            <header className='flex items-center border-b border-slate-800 pt-10 pb-4 lg:py-4 relative'>
              <button 
              type='button'
              onClick={()=>setShowAdd(false)}
              className='text-xl font-bold text-red-300 absolute top-3 right-1 block lg:hidden'
              >
                <FaRegTimesCircle/>
              </button>
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