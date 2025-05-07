import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import Footer from './components/Footer'
import AllButtonsDemo from './components/Footer'
import About_page from './pages/About_page'
import Shop_Page from './pages/Shop_page'
import AccordionUsage from './components/Accordion'
import Contact_Page from './pages/Contact_page'
import Home_page from './pages/Home_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





function App() {
  return (
    <>

      <BrowserRouter>


        <Routes>


          <Route path='/' element={<Home_page />} />
          <Route path='/About_page' element={<About_page />} />
          <Route path='/Shop_Page' element={<Shop_Page />} />
          <Route path='/Contact_Page' element={<Contact_Page />} />


        </Routes>


      </BrowserRouter>





    </>
  )
}

export default App
