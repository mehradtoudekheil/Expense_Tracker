import { useState, useEffect, use } from "react"
import { MyContext } from "./contexts/MyContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useViewTransitionState } from "react-router-dom";
import { useMemo } from "react";

function App() {



  // *** --- Transactions --- *** 

  // get transactions from localstorage
  const [transactions, setTransactions] = useState(() => {
    const savedData = localStorage.getItem("transactionsData");
    return savedData ? JSON.parse(savedData) : [];
  });
  // add transactions to local storage
  useEffect(() => {
    localStorage.setItem(
      "transactionsData",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  // transaction item
  const [transactionItem, setTransactionItem] = useState(null);
  // add transaction item
  useEffect(() => {
    if (transactionItem) {
      setTransactions((prev) => [
        ...prev,
        transactionItem
      ]);
    }
  }, [transactionItem]);


  // Light and Dark Mood 
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  // *** --- Conditions --- *** 

  // Register and Login condition rendering 
  const [showLogin, setShowLogin] = useState(false);
  const [showAdd, setShowAdd] = useState(false)
  // Condition for show info modal 
  const [showInfoModal , setShowInfoModal] = useState(true);


  // *** --- Authentication --- ***

  // get Loggedin user information 

  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : {
        loggedIn: false,
        userName: "",
        email: "",
        password: "",
        theme: "dark",
        role: "user",
      };
  });

  // change logged in user data in localstorage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  // set Registerd User 

  // set a user for add to registerd List 
  const [userItem, setUserItem] = useState(null);

  // set first user in list of registerd user
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedData = localStorage.getItem("registeredUsers");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return {
      users: [
        {
          userName: "admin",
          email: "admin@gmail.com",
          password: "*Admin1234",
          role: "user",
          theme: "darkt",
        }
      ]
    };
  });

  // make Registerd users List 
  useEffect(() => {
    const savedData = localStorage.getItem("registeredUsers");
    if (!savedData) {
      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(registeredUsers)
      );
    }
  }, []);

  // update Registerd users list

  useEffect(() => {
    if (userItem) {
      setRegisteredUsers((prev) => {
        const updated = {
          ...prev,
          users: [...prev.users, userItem],
        };

        localStorage.setItem(
          "registeredUsers",
          JSON.stringify(updated)
        );

        return updated;
      });

    }
  }, [userItem]);


  // income transactions filter
  const inTransactions = (transactions ?? []).filter(
    (t) => t?.user === userData?.email && t?.type === "IN"
  );
  // expense transactions filter
  const outTransactions = (transactions ?? []).filter(
    (t) => t?.user === userData?.email && t?.type === "OUT"
  );


  // *** --- Show Alert --- ***
  // set Alert
  const [alertControl, setAlertControl] = useState({
    show: false,
    type: "", // SUCCESS, ERROR, WARNING, INFO
    messages: []
  });

  // clear Alert
  useEffect(() => {
    // set alert 
    if (alertControl.show) {
      setTimeout(() => {
        setAlertControl({
          show: false,
          type: "",
          messages: []
        });
      }, 2000);
    }
  }, [alertControl])

  return (
    <MyContext.Provider value={{
      dark,
      setDark,
      showLogin,
      setShowLogin,
      userData,
      setUserData,
      alertControl,
      setAlertControl,
      userItem,
      setUserItem,
      registeredUsers,
      setRegisteredUsers,
      transactions,
      setTransactions,
      transactionItem,
      setTransactionItem,
      showAdd,
      setShowAdd,
      inTransactions,
      outTransactions,
      showInfoModal,
      setShowInfoModal

    }}>

      <div className="w-full h-screen dark:bg-slate-950 dark:text-slate-50">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </div>

    </MyContext.Provider>

  );
}

export default App;