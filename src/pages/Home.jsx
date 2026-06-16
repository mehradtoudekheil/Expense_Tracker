import React from 'react'
import AddSec from '../components/layouts/AddSec'
import ListSec from '../components/layouts/ListSec'
import Alert from '../components/Alerts/Alert'
import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

function Home() {

const {alertControl} = useContext(MyContext);

  return (
    <div className='h-full w-full grid grid-cols-11'>
      <AddSec/>
      <ListSec/>
    {alertControl.show && <Alert/>}
    </div>
  )
}

export default Home