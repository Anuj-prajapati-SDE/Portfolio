import React, { useState} from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import AboutExplain from '../AboutExplain/AboutExplain'
import ScrollSlide from '../ScrollSlide/ScrollSlide'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Loader from '../../Loader/Loader'
function Protfolio_container() {
    return (
      <>
          <Loader /> 
          <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Services></Services>
            <AboutExplain></AboutExplain>
            <ScrollSlide></ScrollSlide>
            <Experience></Experience>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
          </>
    )
}

export default Protfolio_container