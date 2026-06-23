import React from 'react'
import { IoTrendingUpSharp } from "react-icons/io5";
import Currency from './Currency'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

function TotalIncome() {

     const { inTransactions } = useContext(MyContext);
    
        const totalIncome = (inTransactions ?? []).reduce(
            (sum, t) => sum + (Number(t?.amount) || 0),
            0
        );
    
    return (
        <div className='w-full h-full flex items-center lg:px-2'>
            <span className='w-8 lg:w-10 h-8 lg:h-10 bg-green-300 border-green-400 dark:bg-green-400/30 border dark:border-green-400/20 flex justify-center items-center rounded-md'>
                <IoTrendingUpSharp className='text-slate-50 text-xl lg:text-2xl' />
            </span>
            <div className='ml-3'>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Total Income</p>
                <p className='text-lg text-green-500 dark:text-green-400'>
                    <Currency amount={totalIncome}/>
                </p>
                <p className='text-xs text-slate-500 dark:text-slate-400 hidden lg:block'>+12.5% from last month</p>
            </div>
        </div>
    )
}

export default TotalIncome