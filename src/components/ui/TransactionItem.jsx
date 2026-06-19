import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { BsBag } from "react-icons/bs";
import Currency from '../feat/Currency';
import DateFormat from '../feat/DateFormat';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function TransactionItem({ type, item }) {

const {setShowInfoModal} = useContext(MyContext)

if (!item) return null;
    let green;
    if (type === "INCOME") {
        green = true;
    } else {
        green = false;
    }

    // console.log(item.date);
    


    return (
        <div className='w-full h-12 border-b border-slate-800 flex justify-between items-center mt-2 py-2'>
            <div className='flex items-center'>
                <span className={`h-8 w-8 rounded-md ${green ? "bg-green-400/30 border border-green-400/20" : "bg-red-400/40 border border-red-400/30"} text-slate-50 flex justify-center items-center`}>
                    <BsBag />
                </span>
                <div className='ml-3'>
                    <p className='text-slate-50 text-md'>
                        {item.title}
                    </p>
                    <p className='text-xs text-slate-400'>
                        <DateFormat date={item.date}/>
                    </p>
                </div>
            </div>
            <div className='flex items-center h-full'>
                <p className={` ${green ? "text-green-500/70" : "text-red-500/70"} text-md mr-10`}>
                    <Currency amount={item.amount}/>
                </p>
                <button
                type='button'
                onClick={()=>{setShowInfoModal(true)}}
                className='text-slate-400'>
                    <SlOptionsVertical />
                </button>
            </div>
        </div>
    )
}

export default TransactionItem