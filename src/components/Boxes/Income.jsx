import React, { useContext, useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import TransactionItem from '../ui/TransactionItem';
import { MyContext } from '../../contexts/MyContext';
import Currency from '../feat/Currency';
import { MdOutlineInbox } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
function Income() {

    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");

    const { inTransactions } = useContext(MyContext);

    const totalIncome = (inTransactions ?? []).reduce(
        (sum, t) => sum + (Number(t?.amount) || 0),
        0
    );

    const filteredTransactions = (inTransactions ?? []).filter((t) => {
        if (!filter) return true;
        console.log(inTransactions);
        return t.cat === filter;
    });

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        switch (sort) {
            case "date-asc":
                return new Date(a.date) - new Date(b.date);

            case "amount-asc":
                return Number(a.amount) - Number(b.amount);

            case "amount-desc":
                return Number(b.amount) - Number(a.amount);

            case "date-desc":
            default:
                return new Date(b.date) - new Date(a.date);
        }
    });

    return (
        <div className='w-full h-full px-3'>
            <header className='w-full flex justify-between items-center gap-2 py-2'>
                <div className='text-slate-900 dark:text-slate-50 items-center'>
                    <div className='flex items-center'>
                        <span className='w-6 h-6 text-green-400 dark:text-green-400/70 rounded-full border border-green-400 dark:border-green-400/70 mr-2 flex justify-center items-center'>
                            <IoIosArrowRoundUp className='text-xl' />
                        </span>
                        Income
                    </div>
                    <p className='text-green-400 dark:text-green-400/70 mt-1 text-xs whitespace-nowrap'>
                        Total : <Currency amount={totalIncome} />
                    </p>

                </div>


                <div className='flex gap-2'>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className='bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 text-xs rounded-md px-1 w-18 py-1 outline-none'
                    >
                        <option value="">Sort</option>
                        <option value="date-desc">Date-Desc</option>
                        <option value="date-asc">Date-Asc</option>
                        <option value="amount-desc">Amount-Desc</option>
                        <option value="amount-asc">Amount-Asc</option>
                    </select>

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                       className='bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 text-xs rounded-md px-1 w-18 py-1 outline-none'
                    >
                        <option value="">Filter</option>
                        <option value="SALARY">Salary</option>
                        <option value="FREELANCE">Freelance</option>
                        <option value="BUSINESS">Business</option>
                        <option value="INVESTMENT">Investment</option>
                        <option value="GIFT">Gift</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
            </header>

            <div className='w-full h-56 py-1 overflow-y-scroll'>
                <AnimatePresence mode="popLayout">
                    {sortedTransactions.length === 0 ? (
                        <div className='w-full h-full flex flex-col items-center justify-center text-slate-500'>
                            <MdOutlineInbox className='text-5xl mb-2' />
                            <p className='text-sm'>
                                No transactions found in this category.
                            </p>
                        </div>
                    ) : (
                        sortedTransactions.map((t) => (
                            <motion.div
                                key={t.id}
                                layout
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{
                                    opacity: 0,
                                    x: -30,
                                    scale: 0.9,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <TransactionItem item={t} type="INCOME" />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Income;