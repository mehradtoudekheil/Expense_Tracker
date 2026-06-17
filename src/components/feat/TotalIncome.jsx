import React from 'react'
import { IoTrendingUpSharp } from "react-icons/io5";
function TotalIncome() {
    return (
        <div className='w-full h-full flex items-center lg:px-2'>
            <span className='w-8 lg:w-10 h-8 lg:h-10 bg-green-400/30 border border-green-400/20 flex justify-center items-center rounded-md'>
                <IoTrendingUpSharp className='text-slate-50 text-xl lg:text-2xl' />
            </span>
            <div className='ml-3'>
                <p className='text-xs text-slate-400'>Total Income</p>
                <p className='text-lg text-green-400'>$ 5,240.00</p>
                <p className='text-xs text-slate-400 hidden lg:block'>+12.5% from last month</p>
            </div>
        </div>
    )
}

export default TotalIncome