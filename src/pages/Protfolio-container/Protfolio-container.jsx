import React, { useState, useEffect } from 'react';
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
// import Loader from '../../Loader/Loader'
import './Profolio_container.css'

function Protfolio_container() { 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [components, setComponents] = useState({});

  useEffect(() => {
    // Load component configuration from localStorage
    const savedComponents = localStorage.getItem('portfolioComponents');
    
    if (savedComponents) {
      try {
        const componentConfig = JSON.parse(savedComponents);
        const componentMap = {};
        componentConfig.forEach(comp => {
          componentMap[comp.id] = comp;
        });
        setComponents(componentMap);
      } catch (error) {
        console.error('Error loading component configuration:', error);
      }
    }

    // Listen for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to check if component should be rendered
  const shouldRenderComponent = (componentId) => {
    const component = components[componentId];
    return !component || component.isActive !== false;
  };

  // Helper function to check conditional rendering
  const shouldRenderScrollSlide = () => {
    const component = components['scroll-slide'];
    if (component && component.isActive === false) return false;
    
    const minWidth = component?.conditional?.minWidth || 550;
    return windowWidth > minWidth;
  };

  return (
    <>
      <div className='Protfolio_container'>
        {shouldRenderComponent('stars') && (
          <>
            <div id='stars' className='stars'></div>
            <div id='stars2' className='stars'></div>
            <div id='stars3' className='stars'></div>
          </>
        )}
        
        {/* {shouldRenderComponent('loader') && <Loader />} */}
        {shouldRenderComponent('navbar') && <Navbar />}
        {shouldRenderComponent('home') && <Home />}
        {shouldRenderComponent('about') && <About />}
        {shouldRenderComponent('services') && <Services />}
        {shouldRenderComponent('about-explain') && <AboutExplain />}
        
        {shouldRenderComponent('stars') && (
          <>
            <div id='stars' className='stars'></div>
            <div id='stars2' className='stars'></div>
            <div id='stars3' className='stars'></div>
          </>
        )}
        
        {shouldRenderScrollSlide() && <ScrollSlide />}
        {shouldRenderComponent('experience') && <Experience />}
        {shouldRenderComponent('testimonials') && <Testimonials />}
        {shouldRenderComponent('contact') && <Contact />}
        
        {shouldRenderComponent('stars') && (
          <>
            <div id='stars' className='stars'></div>
            <div id='stars2' className='stars'></div>
          </>
        )}
        
        {shouldRenderComponent('footer') && <Footer />}
      </div> 
    </>
  )
}

export default Protfolio_container