import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../contexts/MyContext'

function DeleteModal() {

    const { setShowDeleteModal, setSelectedItem, selectedItem, transactions, setTransactions } = useContext(MyContext);

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setSelectedItem(null);
    }

    const deleteHandler = () => {

        const updatedTransactions = transactions.filter(
            (item) => item.id !== selectedItem.id
        );

        setTransactions(updatedTransactions);

        setShowDeleteModal(false);
        setSelectedItem(null);


    }


    return (
        <div className='h-full absolute top-0 left-0 w-full flex justify-center items-center bg-slate-950/70'>
            <div className='bg-slate-900 h-40 w-72 border border-slate-800 rounded-xl px-3 py-5 flex flex-col justify-between'>
                <h3 className='text-lg text-slate-50 text-center'>
                    Do You Really Want To Delete This Item?
                </h3>
                <footer className='w-full grid grid-cols-2 gap-x-3'>
                    <button
                        type='button'
                        onClick={() => { cancelDelete() }}
                        className='h-10 col-span-1 flex justify-center items-center text-slate-50 cursor-pointer border border-slate-800 rounded-md'>
                        Cancel
                    </button>
                    <button
                        type='button'
                        onClick={() => { deleteHandler() }}
                        className='h-10 col-span-1 flex justify-center items-center cursor-pointer text-red-500 bg-red-400/30 border border-red-400/30 rounded-md'>
                        Delete
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default DeleteModal