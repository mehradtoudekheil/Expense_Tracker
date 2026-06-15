import React from 'react'
import AddSec from '../components/layouts/AddSec'
import ListSec from '../components/layouts/ListSec'
function Home() {
  return (
    <div className='h-full w-full grid grid-cols-11'>
      <AddSec/>
      <ListSec/>
    </div>
  )
}

export default Home