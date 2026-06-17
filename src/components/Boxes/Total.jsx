import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'
import CurrentBalance from '../feat/CurrentBalance'
import TotalExpense from '../feat/TotalExpense'
import TotalIncome from '../feat/TotalIncome'
import TotalTransaction from '../feat/TotalTransaction'


function Total() {
  return (
    <div className='w-full lg:h-28 dark:bg-slate-900 rounded-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-4 p-4'>

      <div className='col-span-1 h-18 lg:h-full'>
       <CurrentBalance/>
      </div>

      <div className='col-span-1 min-h-18 mt-3 lg:mt-0  lg:h-full lg:col-span-3 p-1 gap-3 grid grid-cols-2 lg:grid-cols-3'>
        {/* total income */}
        <div className='col-span-1 h-full'>
            <TotalIncome/>
        </div>
        {/* total expense */}
        <div className='col-span-1 h-full'>
          <TotalExpense/>
        </div>
        {/* total transaction */}
        <div className='col-span-1 h-full'>
          <TotalTransaction/>
        </div>
      </div>

    </div>
  )
}

export default Total