import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ThemeContext } from "./components/context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" && "bg-[#121212] "
        } min-h-[100vh]`}
      >
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
