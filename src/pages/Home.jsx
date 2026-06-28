import React, { useContext } from 'react'
import AddSec from '../components/layouts/AddSec'
import ListSec from '../components/layouts/ListSec'
import Alert from '../components/Alerts/Alert'
import { MyContext } from '../contexts/MyContext'
import {Plus} from "lucide-react";
import InfoModal from '../components/modals/InfoModal'
import DeleteModal from '../components/modals/DeleteModal'
import { AnimatePresence } from "framer-motion";

function Home() {

  const {
    alertControl,
    setShowAdd,
    showInfoModal,
    showDeleteModal
  } = useContext(MyContext);

  return (
    <div className='h-full w-full overflow-y-hidden grid grid-cols-1 lg:grid-cols-11'>

      <AddSec />
      <ListSec />

      {/* ALERT (simple render ok) */}
      {alertControl.show && <Alert />}

      {/* FLOAT BUTTON */}
      <button
        type='button'
        onClick={() => setShowAdd(true)}
        className='w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-slate-50 flex justify-center items-center absolute bottom-5 right-5 block lg:hidden'>
        <Plus/>
      </button>

      {/* INFO MODAL */}
      <AnimatePresence mode="wait">
        {showInfoModal && <InfoModal />}
      </AnimatePresence>

      {/* DELETE MODAL */}
      <AnimatePresence mode="wait">
        {showDeleteModal && <DeleteModal />}
      </AnimatePresence>

    </div>
  )
}

export default Home