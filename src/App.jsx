import { useState , useEffect } from "react"


function App() {
 const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])


  return (
    <div className="h-screen w-full dark:bg-slate-950 dark:text-slate-50">
      <h1>Expense Tracker</h1>
    </div>
  );
}

export default App;