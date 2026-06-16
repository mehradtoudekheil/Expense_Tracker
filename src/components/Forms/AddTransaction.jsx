import React from 'react'
import { TbCategory } from "react-icons/tb";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { FaPlus, FaSadCry } from "react-icons/fa";

function AddTransaction() {
    return (
        <div className='w-full pt-4'>
            <form className='w-full'>
                {/* title box */}
                <div>
                    <label className='text-sm text-slate-50'>
                        Title
                    </label>
                    <input
                        type="text"
                        className='h-10 w-full border border-slate-800 text-sm pl-3 outline-none rounded-md mt-3 text-slate-400'
                        placeholder='Enter title (e.g. Salary)'
                    />
                </div>

                {/* Amount box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Amount
                    </label>
                    <div className='w-full flex h-10 border border-slate-800 rounded-md mt-3 text-slate-400'>
                        <span className='h-full w-9 flex justify-center items-center'>
                            $
                        </span>
                        <input
                            type="text"
                            className='h-full w-72 pl-3 text-sm outline-none'
                            placeholder='Enter Amount'
                        />
                    </div>
                </div>

                {/* Category box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Category
                    </label>
                    <div className='w-full flex h-10 border border-slate-800 rounded-md mt-3 text-slate-400'>
                        <span className='h-full w-9 flex justify-center items-center'>
                            <TbCategory />
                        </span>
                        <select
                            className='h-full w-72 pl-3 text-sm outline-none'
                        >
                            <option className='text-sm text-slate-400' value="">Select Category</option>
                        </select>
                    </div>
                </div>

                {/* type */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Type
                    </label>
                    <div className='w-full gap-x-1 grid grid-cols-2 mt-3'>
                        <button className='col-span-1 h-10 border rounded-md border-green-500 flex justify-center items-center text-green-500 text-sm bg-green-500/10'>
                            <BsArrowDownCircle className='mr-2 text-lg' /> Income
                        </button>
                        <button className='col-span-1 h-10 border rounded-md border-red-500 flex justify-center items-center text-red-500 bg-red-500/10 bg-opacity-50 text-sm'>
                            <BsArrowUpCircle className='mr-2 text-lg' /> Expense
                        </button>
                    </div>
                </div>


                {/* Date box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Date
                    </label>
                    <div className='w-full flex h-10 border border-slate-800 rounded-md mt-3 text-slate-400'>
                        <span className='h-full w-9 flex justify-center items-center'>
                            <CiCalendarDate />
                        </span>
                        <input type="date"
                            className='h-full w-72 pl-3 text-sm outline-none [&::-webkit-calendar-picker-indicator]:hidden'
                            defaultValue={new Date().toISOString().split("T")[0]} />
                    </div>
                </div>

                {/* note box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Note (Optional)
                    </label>

                    <textarea className='min-h-15 w-full p-3 text-sm outline-none border border-slate-800 rounded-md mt-3 text-slate-400'
                    placeholder='Add a note...'
                    ></textarea>
                </div>

                <button className='h-12 mt-4 w-full flex justify-between items-center px-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-md'>
                    <span></span>
                    Add Transaction 
                    <FaPlus/>
                </button>

            </form>
        </div>
    )
}

export default AddTransaction