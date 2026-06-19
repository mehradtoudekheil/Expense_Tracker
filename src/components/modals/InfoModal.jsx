import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
function InfoModal() {
    
    const {setShowInfoModal} = useContext(MyContext);
    
  return (
    <div className='h-full absolute top-0 left-0 w-full flex justify-center items-center bg-slate-950/70'>
        <div className='bg-slate-900 h-96 w-72 border border-slate-800 rounded-xl p-3 flex flex-col justify-between'>
            <header className='flex justify-center items-center '>
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
                        Salary
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Amount : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        $120.00
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Category : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        Freelance
                    </p>
                </div>
                <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Note : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        Salary
                    </p>
                </div>
                 <div className='flex'>
                    <p className='font-bold text-blue-400'>
                        Date : 
                    </p>
                    <p className='font-light text-slate-100 ml-3'>
                        June 17, 2026
                    </p>
                </div>
            </div>
            <footer className='w-full grid grid-cols-2 gap-x-3'>
                <button 
                type='button'
                onClick={()=>{setShowInfoModal(false)}}
                className='h-10 col-span-1 flex justify-center items-center text-slate-50 cursor-pointer border border-slate-800 rounded-md'>
                    Back
                </button>
                 <button className='h-10 col-span-1 flex justify-center items-center cursor-pointer text-red-500 bg-red-400/30 border border-red-400/30 rounded-md'>
                    Delete
                </button>
            </footer>
        </div>
    </div>
  )
}

export default InfoModal