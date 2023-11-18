import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiOutlineSun } from "react-icons/hi2";
import { ThemeContext } from "./context/ThemeContext";
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  return (
    <div className='flex items-center px-5'>
      <img src={logo} width={60} height={60} alt='logo' />
      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full '>
        <HiMagnifyingGlass />
        <input
          type='text'
          placeholder='Search Games'
          className=' px-2 bg-transparent outline-none '
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className='bg-slate-200 text-[35px] rounded-full text-black p- cursor-pointer '
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiOutlineSun
            className='bg-slate-200 text-[35px] rounded-full text-black p-1 cursor-pointer'
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
