import React from 'react'
import Header from './Header'
import Total from '../Boxes/Total'
import TransactionContainer from '../Boxes/TransactionContainer'
import ChartContainer from '../Boxes/ChartContainer'


function ListSec() {
    return (
        <div className='h-full col-span-8 p-4 flex flex-col justify-between'>
            <Header />
            <Total/>
            <TransactionContainer/>
            <ChartContainer/>
        </div>
    )
}

export default ListSec