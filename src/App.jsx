import { useState, useEffect } from "react"
import { MyContext } from "./contexts/MyContext";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

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


  // *** --- Authentication --- ***

  // get Loggedin user information 

  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : {
        loggedIn: false,
        userName: "",
        email : "",
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
      setRegisteredUsers

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