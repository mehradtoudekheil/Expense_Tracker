import React from 'react'
import AddSec from '../components/layouts/AddSec'
import ListSec from '../components/layouts/ListSec'
import Alert from '../components/Alerts/Alert'
import { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'
import { FaPlus } from "react-icons/fa";
import InfoModal from '../components/modals/InfoModal'

import DeleteModal from '../components/modals/DeleteModal'
function Home() {

  const { alertControl, setShowAdd , showInfoModal , showDeleteModal} = useContext(MyContext);

  return (
    <div className='h-full w-full overflow-y-hidden grid grid-cols-1 lg:grid-cols-11'>
      <AddSec />
      <ListSec />
      {alertControl.show && <Alert />}
      <button
        type='button'
        onClick={() => setShowAdd(true)}
        className='w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500 trxt-slate-50 flex justify-center items-center absolute bottom-5 right-5 block lg:hidden'>
        <FaPlus />
      </button>
      {showInfoModal && <InfoModal/>}
      {showDeleteModal && <DeleteModal/>}
    </div>
    
  )
}

export default Home