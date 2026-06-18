import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import TransactionItem from '../ui/TransactionItem';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import Currency from '../feat/Currency';
function Income() {
    

   const { inTransactions } = useContext(MyContext);
      
          const totalIncome = (inTransactions ?? []).reduce(
              (sum, t) => sum + (Number(t?.amount) || 0),
              0
          );



    return (
        <div className='w-full h-full px-3'>
            <header className='w-full h-10 flex justify-between items-center'>
                <div className='flex text-slate-50'>
                    <span className='w-6 h-6 text-green-400/70 rounded-full border border-green-400/70 mr-2 flex justify-center items-center'>
                        <IoIosArrowRoundUp className='text-xl' />
                    </span>
                    Income
                </div>
                <p className='text-green-400/70 text-xs'>
                    Total : <Currency amount={totalIncome}/>
                </p>
            </header>
            <div className='w-full h-60 py-2 overflow-y-scroll '>

                {(inTransactions ?? [])
                    .filter((t) => t != null)
                    .map((t) => (
                        <TransactionItem
                            key={t.id}
                            item={t}
                            type="INCOME"
                        />
                    ))}

            </div>
        </div>
    )
}

export default Income