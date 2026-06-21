import React, { useContext } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { MyContext } from "../contexts/MyContext";
import { Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import Alert from "../components/Alerts/Alert";
// import Framar-motion
import { AnimatePresence, motion } from "framer-motion";

function Auth() {

  const { showLogin, alertControl } = useContext(MyContext);

  return (
    <div className="w-full h-full flex justify-center items-center relative">

      {/* 🔥 Animate Login/Register */}
      <AnimatePresence mode="wait">
        {showLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.30 }}
            className="w-full flex justify-center"
          >
            <Login />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.30 }}
            className="w-full flex justify-center"
          >
            <Register />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home Button */}
      <Link
        to={"/"}
        className="p-2 flex text-sm dark:text-slate-50 items-center bg-slate-900 border border-slate-800 rounded-lg hover:scale-110 transition duration-300 top-5 left-10 absolute cursor-pointer"
      >
        <TbHome className="mr-2" /> Home
      </Link>

      {/* Alert */}
      {alertControl.show && <Alert />}
    </div>
  );
}

export default Auth;