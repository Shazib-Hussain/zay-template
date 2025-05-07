import React from 'react'
import Navbar from '../components/Navbar'
import About_Hero from '../components/About_Hero'
import About_Services from '../components/About_Services'
import About_Brands from '../components/About_Brands'
import Footer from '../components/Footer'

function About_page() {
  return (
    <>
      <Navbar />
      <About_Hero/>
      <About_Services/>
      <About_Brands/>
      <Footer/>
    </>
  )
}

export default About_page