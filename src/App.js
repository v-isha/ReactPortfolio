import React from 'react'
import './App.css'
import About from './components/About/About'

import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Productlist from './components/ProductList/Productlist'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <Intro/>
         <About/>
         <Productlist/>
         <Contact/>
         <Footer/>
          
      </BrowserRouter>
    </div>
  )
}

export default App