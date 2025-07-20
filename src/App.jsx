import React from 'react'
import { useState } from "react"

import Navbar from './Components/Navbar/Navbar'
import User from './Components/User/User'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'

import Portfolio from './Components/Portfolio/Portfolio'
//import Footer from './Components/Footer/Footer'

import "./App.css";



function App ()  {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <Navbar toggleMode={toggleMode} isDarkMode={isDarkMode} />

        <User />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        </div>


     
    )
  }
  export default App
