import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { BsBag } from "react-icons/bs";

function TransactionItem({type}) {

    let green;
    if (type === "INCOME"){
        green = true;
    }else {
        green = false;
    }

  return (
    <div className='w-full h-12 border-b border-slate-800 flex justify-between items-center mt-2'>
        <div className='flex items-center'>
            <span className={`h-8 w-8 rounded-md ${green ? "bg-green-400/30 border border-green-400/20" : "bg-red-400/40 border border-red-400/30"} text-slate-50 flex justify-center items-center`}>
                <BsBag/>
            </span>
           <div className='ml-3'>
             <p className='text-slate-50 text-md'>
                Salary
            </p>
            <p className='text-xs text-slate-400'>
                June 17, 2026
            </p>
           </div>
        </div>
        <div className='flex items-center h-full'>
            <p className={` ${green ? "text-green-500/70": "text-red-500/70"} text-md mr-10`}>
                $1010,20
            </p>
            <span className='text-slate-400'>
                <SlOptionsVertical/>
            </span>
        </div>
    </div>
  )
}

export default TransactionItem