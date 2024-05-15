import { useState,useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

import {styles} from './styles';

import { navLinks } from './constants/index';

import {logo, menu, close} from './assets';

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech , Works, StarsCanvas } from './components'

import { BrowserRouter } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/> 
      </div>
      <About/>
      <Experience/>
      <Tech></Tech>
      <Works></Works>
      <Feedbacks/>
      <div>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>

    </BrowserRouter>
    
     
    </>
  )
}

export default App
