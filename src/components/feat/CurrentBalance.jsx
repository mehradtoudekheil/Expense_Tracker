import React from 'react'
import Currency from './Currency'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

function CurrentBalance() {

    const { inTransactions, outTransactions } = useContext(MyContext);

    const totalIncome = (inTransactions ?? []).reduce(
        (sum, t) => sum + (Number(t?.amount) || 0),
        0
    );

    const totalExpense = (outTransactions ?? []).reduce(
        (sum, t) => sum + (Number(t?.amount) || 0),
        0
    );

    const currentBalance = totalIncome - totalExpense;

    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <p className='text-md text-slate-400'>
                Current Balance :
            </p>
            <h2 className='text-3xl font-bold text-slate-50 mt-1'>
                <Currency amount={currentBalance}/>
            </h2>
        </div>
    )
}

export default CurrentBalance