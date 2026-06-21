import React from 'react'
// import icons
import { TbCategory } from "react-icons/tb";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { FaPlus, FaSadCry } from "react-icons/fa";

// import tools
import { useContext, useRef, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';


// date 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddTransaction() {

    // states 
    const [type, setType] = useState("IN");
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    // get context info
    const { setTransactionItem, setAlertControl, userData , setShowAdd } = useContext(MyContext);

    // set ref item
    const title = useRef()
    const amount = useRef();
    const category = useRef();
    const date = useRef();
    const note = useRef();

    // income caegories
    const incomeCategories = [
        { value: "SALARY", label: "Salary" },
        { value: "FREELANCE", label: "Freelance" },
        { value: "BUSINESS", label: "Business" },
        { value: "INVESTMENT", label: "Investment" },
        { value: "GIFT", label: "Gift" },
        { value: "OTHER", label: "Other" },
    ];

    const expenseCategories = [
        { value: "FOOD", label: "Food" },
        { value: "TRANSPORT", label: "Transport" },
        { value: "SHOPPING", label: "Shopping" },
        { value: "BILLS", label: "Bills" },
        { value: "HEALTH", label: "Health" },
        { value: "ENTERTAINMENT", label: "Entertainment" },
        { value: "EDUCATION", label: "Education" },
        { value: "TRAVEL", label: "Travel" },
        { value: "CAR", label: "Car" },
        { value: "TAX", label: "Tax" },
        { value: "OTHER", label: "Other" },
    ];

    // change type
    const changeTypeHandler = (newType) => {
        setType(newType);

        if (category.current) {
            category.current.value = "";
        }
    };


    // check user logged in 

    const checkUserLogin = (e) => {
        if (!userData.loggedIn) {
            setAlertControl({
                show: true,
                type: "ERROR",
                messages: ["You Must Be Logged In."],
            });
            e.target.blur();
        }
    }


    // add transaction function 
    const addTransactionHandler = () => {

        // check the title not be empty
        if (title.current.value.length == 0) {
            setAlertControl({
                show: true,
                type: "ERROR",
                messages: ["Transaction Must have a Title."],
            });
            return;
        }
        // check amount

        const amountValue = parseFloat(amount.current.value);

        if (isNaN(amountValue) || amountValue <= 0) {
            setAlertControl({
                show: true,
                type: "ERROR",
                messages: ["Please enter a valid amount."],
            });
            return;
        }
        // check the category
        if (category.current.value == "") {
            setAlertControl({
                show: true,
                type: "ERROR",
                messages: ["Please Set a Category."],
            });
            return;
        }

        // create an item 
        let item = {
            id: Date.now(),
            title: title.current.value,
            cat: category.current.value,
            type: type,
            amount: amountValue,
            note: note.current.value,
            date: selectedDate,
            user: userData.email,
        };

        setTransactionItem(item);

        // show Success Alert
        setAlertControl({
            show: true,
            type: "SUCCESS",
            messages: ["Transaction added successfully!"],
        });

        // Clear Form

        title.current.value = "";
        category.current.value = "";
        amount.current.value = "";
        note.current.value = "";

        setSelectedDate(
            new Date().toISOString().split("T")[0]
        );

        setShowAdd(false);

    }


    return (
        <div className='w-full pt-4'>
            <form className='w-full'>
                {/* title box */}
                <div>
                    <label className='text-sm text-slate-50'>
                        Title
                    </label>
                    <input
                        onFocus={(e) => checkUserLogin(e)}
                        ref={title}
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
                            onFocus={(e) => checkUserLogin(e)}
                            ref={amount}
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
                            onFocus={(e) => checkUserLogin(e)}
                            ref={category}
                            className='h-full w-72 pl-3 text-sm outline-none'
                        >
                            <option className='text-sm text-slate-400' value="">Select Category</option>
                            {(type === "IN"
                                ? incomeCategories
                                : expenseCategories
                            ).map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* type */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Type
                    </label>
                    <div className='w-full gap-x-1 grid grid-cols-2 mt-3'>
                        <button
                            type="button"
                            onClick={() => changeTypeHandler("IN")}
                            className={`col-span-1 h-10 border rounded-md flex justify-center items-center text-sm
                                     ${type === "IN"
                                    ? "border-green-500 text-green-500 bg-green-500/10"
                                    : "border-slate-800 text-slate-400"
                                }`}
                        >
                            <BsArrowDownCircle className='mr-2 text-lg' />
                            Income
                        </button>

                        <button
                            type="button"
                            onClick={() => changeTypeHandler("OUT")}
                            className={`col-span-1 h-10 border rounded-md flex justify-center items-center text-sm
                                  ${type === "OUT"
                                    ? "border-red-500 text-red-500 bg-red-500/10"
                                    : "border-slate-800 text-slate-400"
                                }`}
                        >
                            <BsArrowUpCircle className='mr-2 text-lg' />
                            Expense
                        </button>
                    </div>
                </div>


                {/* Date box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Date
                    </label>

                    <div className='w-full flex h-10 border border-slate-800 rounded-md mt-3 text-slate-400 items-center'>
                        <span className='h-full w-9 flex justify-center items-center'>
                            <CiCalendarDate />
                        </span>

                        <DatePicker
                            onFocus={(e) => checkUserLogin(e)}
                            selected={new Date(selectedDate)}
                            onChange={(date) => {
                                const formattedDate =
                                    date?.toISOString().split("T")[0];
                                setSelectedDate(formattedDate);
                            }}
                            dateFormat="yyyy-MM-dd"
                            className='h-full w-full pl-3 text-sm  text-slate-400 outline-none h-full'
                        />
                    </div>
                </div>

                {/* note box */}
                <div className='mt-4'>
                    <label className='text-sm text-slate-50'>
                        Note (Optional)
                    </label>

                    <textarea
                        onFocus={(e) => checkUserLogin(e)}
                        ref={note}
                        className='min-h-15 w-full p-3 text-sm outline-none border border-slate-800 rounded-md mt-3 text-slate-400'
                        placeholder='Add a note...'
                    ></textarea>
                </div>

                <button
                    type='button'
                    onClick={addTransactionHandler}
                    className='h-12 mt-4 w-full flex justify-between items-center px-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-md'>
                    <span></span>
                    Add Transaction
                    <FaPlus />
                </button>

            </form>
        </div>
    )
}

export default AddTransaction