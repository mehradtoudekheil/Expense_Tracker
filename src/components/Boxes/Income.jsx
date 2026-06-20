import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import TransactionItem from '../ui/TransactionItem';
import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import Currency from '../feat/Currency';
function Income() {

    const [sort, setSort] = useState("");

    const { inTransactions } = useContext(MyContext);

    const totalIncome = (inTransactions ?? []).reduce(
        (sum, t) => sum + (Number(t?.amount) || 0),
        0
    );

    const sortedTransactions = [...(inTransactions ?? [])]
        .filter((t) => t != null)
        .sort((a, b) => {
            switch (sort) {
                case "date-asc":
                    return new Date(a.date) - new Date(b.date);

                case "date-desc":
                    return new Date(b.date) - new Date(a.date);

                case "amount-asc":
                    return Number(a.amount) - Number(b.amount);

                case "amount-desc":
                    return Number(b.amount) - Number(a.amount);

                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });



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
                    Total : <Currency amount={totalIncome} />
                </p>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='bg-slate-900 text-slate-400 border border-slate-800 text-xs rounded-md px-1  w-18 py-1 outline-none'
                >
                    <option value="">Sort</option>
                    <option value="date-desc">Date-Desc</option>
                    <option value="date-asc">Date-Asc</option>
                    <option value="amount-desc">Amount-Desc</option>
                    <option value="amount-asc">Amount-Asc</option>
                </select>

            </header>
            <div className='w-full h-60 py-2 overflow-y-scroll '>

                {sortedTransactions.map((t) => (
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