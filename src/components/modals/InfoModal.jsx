import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import Currency from '../feat/Currency';
import DateFormat from '../feat/DateFormat';
import { IoIosInformationCircleOutline } from "react-icons/io";
function InfoModal() {
    
    const {setShowInfoModal , selectedItem , setSelectedItem , setShowDeleteModal} = useContext(MyContext);

    const backhandler = ()=>{
        setShowInfoModal(false);
        setSelectedItem(null);
    }
    
    const showDeleteHandler = ()=>{
        setShowInfoModal(false)
        setShowDeleteModal(true)
    }

  return (
    <div className='h-full absolute top-0 left-0 w-full flex justify-center items-center bg-slate-950/70'>
        <div className='bg-slate-900 h-96 w-72 border border-slate-800 rounded-xl p-3 flex flex-col justify-between'>
            <header className='flex items-center border-b border-slate-800 pb-3'>
                 <IoIosInformationCircleOutline className='text-2xl text-blue-400 mr-2'/>
                <h2 className='text-xl text-slate-50'>
                   Item Info
                </h2>

            </header>
            <div className='w-full h-64 flex flex-col justify-between py-5'>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Title : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        {selectedItem.title}
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Amount : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                     <Currency amount={selectedItem.amount}/>   
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Category : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        {selectedItem.cat}
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Note : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        {selectedItem.note || "No Note !!!"}
                    </p>
                </div>
                 <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Date : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        <DateFormat date={selectedItem.date}/>
                    </p>
                </div>
            </div>
            <footer className='w-full grid grid-cols-2 gap-x-3'>
                <button 
                type='button'
                onClick={()=>{backhandler()}}
                className='h-10 col-span-1 flex justify-center items-center text-slate-50 cursor-pointer border border-slate-800 rounded-md'>
                    Back
                </button>
                 <button 
                 type='button'
                 onClick={()=>{showDeleteHandler()}}
                 className='h-10 col-span-1 flex justify-center items-center cursor-pointer text-red-500 bg-red-400/30 border border-red-400/30 rounded-md'>
                    Delete
                </button>
            </footer>
        </div>
    </div>
  )
}

export default InfoModal