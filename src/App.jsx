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

  // Register and Login condition rendering 
  const [showLogin , setShowLogin] = useState(false);


// *** --- Authentication --- ***

  // get Loggedin user information 

 const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : {
        loggedIn: false,
        username: "",
        password: "",
        theme: "dark",
        role: "user",
      };
  });

  // change logged in user data in localstorage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);






  return (
    <MyContext.Provider value={{ dark, setDark , showLogin , setShowLogin  , userData , setUserData}}>

      <div className="w-full h-screen dark:bg-slate-950 dark:text-slate-50">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Auth" element={<Auth/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </MyContext.Provider>

  );
}

export default App;