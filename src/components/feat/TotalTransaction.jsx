import React from 'react'
import { WalletMinimal } from 'lucide-react';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

function TotalTransaction() {

    const { transactions, userData } = useContext(MyContext);

    const totalTransactions = (transactions ?? []).filter(
        (t) => t?.user === userData?.email
    ).length;

    return (
        <div className='w-full h-full flex items-center lg:px-2'>
            <span className='w-8 lg:w-10 h-8 lg:h-10 bg-blue-300 border-blue-400 dark:bg-blue-400/60 border dark:border-blue-400/40 flex justify-center items-center rounded-md'>
                <WalletMinimal className='text-slate-50 text-xl lg:text-2xl' />
            </span>
            <div className='ml-3'>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Transactions</p>
                <p className='text-lg text-blue-500 dark:text-blue-400'>{totalTransactions}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400 hidden lg:block'>+4 from last month</p>
            </div>
        </div>
    )
}

export default TotalTransaction