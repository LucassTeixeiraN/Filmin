import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

import { IoMenuSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [sidebarClass, setSidebarClass] = useState('sidebar-closed')


  return (
    <>
      <nav id='navbar'>
        <IconContext.Provider value={{ color: "rgb(255, 153, 0)", size: "60px", className: "menu-icon"}}>
          <div onClick={() => {setSidebarClass('sidebar-opened')}}>
            <IoMenuSharp />
          </div>
        </IconContext.Provider>
        <h2>
          <Link to="/">Filmin</Link>
        </h2>
        <span></span>
      </nav>

      <div className={sidebarClass}>
        <div className='top-sidebar'>
          <div className='paths'>
            <h3>Ir Para:</h3>
            <Link className='sideBarPaths'>Filmes por Gênero</Link>
            <Link className='sideBarPaths'>Filmes mais bem avaliados</Link>
          </div>
          <IconContext.Provider value={{ color: "rgb(255, 153, 0)", size:'55px'}} className='close-button'>
            <div onClick={() => {setSidebarClass('sidebar-closed')}}>
              <IoIosClose />
            </div>
          </IconContext.Provider>
        </div>
        <div className="bottom-sidebar">
          <div className="contact">
            <a href="https://github.com/LucasKashorro" target='_blank'>
              <IconContext.Provider value={{ color: "rgb(255, 255, 255)", size: "40px"}} className='contact-icons'> 
                <div><FaGithub /></div>
              </IconContext.Provider>
            </a>
            <a href="" target='_blank'>
              <IconContext.Provider value={{ color: "rgb(255, 255, 255)", size: "40px"}} className='contact-icons'> 
                <div><FaLinkedin /></div>
                </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default App
