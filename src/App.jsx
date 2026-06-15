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

  // Register and Login Handler

  const [showLogin , setShowLogin] = useState(false);

  return (
    <MyContext.Provider value={{ dark, setDark , showLogin , setShowLogin }}>

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