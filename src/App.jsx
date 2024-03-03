import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { IoMenuSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function App() {

  return (
    <>
      <nav id='navbar'>
        <IconContext.Provider value={{ color: "rgb(255, 153, 0)", size: "60px", className: "menu-icon"}}>
          <div>
            <IoMenuSharp />
          </div>
        </IconContext.Provider>
        <h2>
          <Link to="/">Filmin</Link>
        </h2>
        <span></span>
      </nav>
      <Outlet />
    </>

  )
}

export default App
