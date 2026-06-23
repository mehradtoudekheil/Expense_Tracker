import React from 'react'
import Income from './Income'
import Expense from './Expense'

function TransactionContainer() {
  return (
    <div className='w-full rounded-xl gap-x-5 gap-y-3 grid grid-cols-1 lg:grid-cols-2 '>
      <div className='col-span-1 h-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl'>
        <Income/>
      </div>
      <div className='col-span-1 h-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl'>
        <Expense/>
      </div>
    </div>
  )
}

export default TransactionContainer