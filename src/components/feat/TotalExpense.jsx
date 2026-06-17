import React from 'react'
import { IoIosTrendingDown } from "react-icons/io";
function TotalExpense() {
  return (
   <div className='w-full h-full flex items-center lg:px-2'>
           <span className='w-8 lg:w-10 h-8 lg:h-10 bg-red-400/40 border border-red-400/30 flex justify-center items-center rounded-md'>
               <IoIosTrendingDown className='text-slate-50 text-xl lg:text-2xl'/>
           </span>
           <div className='ml-3'>
               <p className='text-xs text-slate-400'>Total Expense</p>
               <p className='text-lg text-red-400'>$ 5,240.00</p>
               <p className='text-xs text-slate-400 hidden lg:block'>-8.3% from last month</p>
           </div>
       </div>
  )
}

export default TotalExpense