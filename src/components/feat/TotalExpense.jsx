import React from 'react'
import { IoIosTrendingDown } from "react-icons/io";
import Currency from './Currency'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

function TotalExpense() {

    const { outTransactions } = useContext(MyContext);
    
        const totalExpense = (outTransactions ?? []).reduce(
            (sum, t) => sum + (Number(t?.amount) || 0),
            0
        );

  return (
   <div className='w-full h-full flex items-center lg:px-2'>
           <span className='w-8 lg:w-10 h-8 lg:h-10 bg-red-400/40 border border-red-400/30 flex justify-center items-center rounded-md'>
               <IoIosTrendingDown className='text-slate-50 text-xl lg:text-2xl'/>
           </span>
           <div className='ml-3'>
               <p className='text-xs text-slate-400'>Total Expense</p>
               <p className='text-lg text-red-400'>
                <Currency amount={totalExpense}/>
               </p>
               <p className='text-xs text-slate-400 hidden lg:block'>-8.3% from last month</p>
           </div>
       </div>
  )
}

export default TotalExpense