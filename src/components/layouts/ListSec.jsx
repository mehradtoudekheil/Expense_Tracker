import React from 'react'
import Header from './Header'
import Total from '../Boxes/Total'
import TransactionContainer from '../Boxes/TransactionContainer'
import ChartContainer from '../Boxes/ChartContainer'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

function ListSec() {

    const { showAdd } = useContext(MyContext)

    return (
        <div className="min-h-screen overflow-y-scroll lg:col-span-8 col-span-1 p-4 flex flex-col gap-4">
            <Header />
            <Total />
            <TransactionContainer />
            <ChartContainer />
        </div>
    )
}

export default ListSec