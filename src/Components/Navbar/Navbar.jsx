import React from 'react'
import { useState ,useRef} from "react";
import {  FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import './Navbar.css'

function  Navbar ({ isDarkMode, toggleMode })  { 
    
   const menuRef= useRef();

   const openMenu = ()=>{
    menuRef.current.style.right="0";

   }
   const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
    
   }
  return(
    <div className="navbar">
        <div>Portfolio</div>
        <GiHamburgerMenu onClick={openMenu} className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
          <IoMdClose onClick={closeMenu} className="nav-mob-close"/>
           <li className="nav-item"><a href="#home"><p>Home</p></a>
           
           </li>
            <li><a href="#about" ><p>About Me</p></a></li>



            <li><a href="#skill"><p>Skills</p></a></li>
            <li><a href="#portfolio"><p>Projects</p></a></li>
            <li><a href="#contacts"><p>Contact</p></a></li>
        
            </ul>
             <button onClick={toggleMode} className="toggle-btn">
        {isDarkMode ? <GoSun /> : <FaMoon />}
      </button>
            
    </div>
  )
}
export default Navbar