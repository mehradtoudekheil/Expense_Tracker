import React from 'react'
import { CiWallet } from "react-icons/ci";
function TotalTransaction() {
    return (
        <div className='w-full h-full flex items-center lg:px-2'>
            <span className='w-8 lg:w-10 h-8 lg:h-10 bg-blue-400/60 border border-blue-400/40 flex justify-center items-center rounded-md'>
                <CiWallet className='text-slate-50 text-xl lg:text-2xl' />
            </span>
            <div className='ml-3'>
                <p className='text-xs text-slate-400'>Transactions</p>
                <p className='text-lg text-blue-400'>24</p>
                <p className='text-xs text-slate-400 hidden lg:block'>+4 from last month</p>
            </div>
        </div>
    )
}

export default TotalTransaction