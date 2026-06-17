import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import TransactionItem from '../ui/TransactionItem';
function Expense() {
  return (
    <div className='w-full h-full px-3'>
           <header className='w-full h-10 flex justify-between items-center'>
               <div className='flex text-slate-50'>
                   <span className='w-6 h-6 text-red-400/70 rounded-full border border-red-400/70 mr-2 flex justify-center items-center'>
                   <IoIosArrowRoundDown className='text-xl'/>
                   </span>
                   Income
               </div>
               <p className='text-red-400/70 text-xs'>
                   Total : $ 5230,00
               </p>
           </header>
           <div className='w-full h-60 py-2 overflow-y-scroll '>
                <TransactionItem type={"EXPENSE"}/>
                <TransactionItem type={"EXPENSE"}/>
                <TransactionItem type={"EXPENSE"}/>
            </div>
       </div>
  )
}

export default Expense