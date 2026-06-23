import React from 'react'
import ExpenseDonutChart from '../charts/ExpenseDonutChart'
import ExpenseLineChart from '../charts/ExpenseLineChart'
import WeeklyChart from '../charts/WeeklyChart'
function ChartContainer() {
  return (
    <div className='w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800'>
      <header className='h-12 w-full flex justify-between items-center border-b border-slate-200 dark:border-slate-800 px-3'>
        <h6 className='text-slate-900 dark:text-slate-50 text-md'>
          Charts & Overview
        </h6>
      </header>
      <div className='w-full grid grid-cols-1 p-2 lg:grid-cols-3 gap-3'>
        <ExpenseDonutChart/>
        <WeeklyChart/>
        <ExpenseLineChart/>
      </div>
    </div>
  )
}

export default ChartContainer