import React from 'react'

function CurrentBalance() {
    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <p className='text-md text-slate-400'>
                Current Balance :
            </p>
            <h2 className='text-3xl font-bold text-slate-50 mt-1'>
                $ 32,324.00
            </h2>
        </div>
    )
}

export default CurrentBalance