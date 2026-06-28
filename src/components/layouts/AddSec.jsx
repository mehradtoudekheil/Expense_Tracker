import React, { useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { Plus, CircleX } from "lucide-react";

import AddTransaction from '../Forms/AddTransaction';
import { MyContext } from '../../contexts/MyContext';

function AddSec() {

  const { showAdd, setShowAdd } = useContext(MyContext);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block col-span-3 h-full p-4">
        <div className='h-full w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4'>

          <header className='flex items-center border-b border-slate-200 dark:border-slate-800 py-4'>
            <span className='w-10 h-10 bg-blue-500 text-slate-50 flex justify-center items-center rounded-md'>
              <Plus />
            </span>

            <h3 className='text-slate-900 dark:text-slate-50 text-md ml-2'>
              Add New Transaction
            </h3>
          </header>

          <AddTransaction />

        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {showAdd && (
          <motion.div
            className="fixed inset-0 z-50 flex lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* BACKDROP */}
            <motion.div
              className="absolute inset-0 bg-white dark:bg-slate-950/70"
              onClick={() => setShowAdd(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* PANEL */}
            <motion.div
              className="relative w-full h-full p-4 bg-white dark:bg-slate-900"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25 }}
            >

              <header className='flex items-center border-b border-slate-200 dark:border-slate-800 pt-10 pb-4 relative'>

                <button
                  type='button'
                  onClick={() => setShowAdd(false)}
                  className='text-xl text-red-300 absolute top-3 right-1'
                >
                  <CircleX />
                </button>

                <span className='w-10 h-10 bg-blue-500 text-slate-50 flex justify-center items-center rounded-md'>
                  <Plus />
                </span>

                <h3 className='text-slate-900 dark:text-slate-50 text-md ml-2'>
                  Add New Transaction
                </h3>

              </header>

              <AddTransaction />

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AddSec;