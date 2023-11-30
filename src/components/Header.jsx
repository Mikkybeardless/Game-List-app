import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiOutlineSun } from "react-icons/hi2";
import { ThemeContext } from "./context/ThemeContext";

function Header({ onSearch }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchName, setSearchName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchName);
  };

  return (
    <div className='flex items-center px-5'>
      <img src={logo} width={60} height={60} alt='logo' />
      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full '>
        <HiMagnifyingGlass />
        <form onSubmit={handleSubmit} action=''>
          <input
            type='text'
            placeholder='Search Games'
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            className=' px-2 bg-transparent outline-none '
          />
        </form>
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
