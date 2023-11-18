import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
