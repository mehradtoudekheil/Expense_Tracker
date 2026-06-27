import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { AnimatePresence, motion } from "framer-motion";

function Alert() {
  const { alertControl } = useContext(MyContext);

  const colorMap = {
    SUCCESS: "green",
    ERROR: "red",
    WARNING: "amber",
    INFO: "blue",
    DEFAULT: "gray"
  };

  const typeColor = colorMap[alertControl.type] || colorMap.DEFAULT;

  return (
    <div className="w-[22rem] absolute top-[15px] right-[15px] z-50">

      <AnimatePresence>
        {alertControl.messages.length > 0 &&
          alertControl.messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                h-9 my-3 rounded-md flex items-center px-3
                ${typeColor === "green" && "bg-emerald-700 border border-green-500"}
                ${typeColor === "red" && "bg-red-400 border border-rose-600"}
                ${typeColor === "amber" && "bg-amber-400"}
                ${typeColor === "blue" && "bg-indigo-500"}
                ${typeColor === "gray" && "bg-gray-500"}
              `}
            >
              <p className="text-slate-50 text-sm font-bold">
                {message}
              </p>
            </motion.div>
          ))
        }
      </AnimatePresence>

    </div>
  );
}

export default Alert;