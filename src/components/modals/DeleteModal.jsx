import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import { motion } from "framer-motion";

function DeleteModal() {
    const {
        setShowDeleteModal,
        setSelectedItem,
        selectedItem,
        transactions,
        setTransactions,
    } = useContext(MyContext);

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setSelectedItem(null);
    };

    const deleteHandler = () => {
        // فقط modal رو ببند
        setShowDeleteModal(false);

        // بعد از exit animation حذف کن
        setTimeout(() => {
            if (!selectedItem) return;

            const updatedTransactions = transactions.filter(
                (item) => item.id !== selectedItem.id
            );

            setTransactions(updatedTransactions);
            setSelectedItem(null);
        }, 200); // باید با duration animation یکی باشه
    };

    return (
        <motion.div
            className="h-full absolute top-0 left-0 w-full flex justify-center items-center bg-slate-950/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-slate-900 h-40 w-72 border border-slate-800 rounded-xl px-3 py-5 flex flex-col justify-between"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
            >
                <h3 className="text-lg text-slate-50 text-center">
                    Do You Really Want To Delete This Item?
                </h3>

                <footer className="w-full grid grid-cols-2 gap-x-3">
                    <button
                        onClick={cancelDelete}
                        className="h-10 text-slate-50 border border-slate-800 rounded-md"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={deleteHandler}
                        className="h-10 text-red-500 bg-red-400/30 border border-red-400/30 rounded-md"
                    >
                        Delete
                    </button>
                </footer>
            </motion.div>
        </motion.div>
    );
}

export default DeleteModal;