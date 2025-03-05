import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import DownloadCV from "../../assets/Anuj-prajapati-Resume.pdf"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger); 

function Navbar() { 
  const [navClick, setNavClick] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    let truetl = gsap.timeline(); 
    let falsetl = gsap.timeline();
    falsetl.add("same-time-out")
    if (navClick) { 
      truetl.to(menuRef.current, { 
        duration: 0.6,
        height: "86.6vh",
        opacity:1,
         ease: 'power3.inOut'
        })
        truetl.to(".hambargar-clicked-section .menu-btn", {
         opacity:1,
         transform:'translateY(0px)',
        })
        truetl.to(".hambargar-clicked-section .terms_condition", {
         opacity:1,
         transform:'translateY(0px)',
        })
       truetl.to(".hambargar-clicked-section .nav-links a", {
        opacity:1,
        stagger:0.2,
        transform:'translateX(0px)',
         scrub:2,
       })
      
    }
     else {
      falsetl.to(".hambargar-clicked-section .menu-btn", {
        opacity:0,
        transform:'translateY(-200px)',
       },  "same-time-out")
      falsetl.to(".hambargar-clicked-section .terms_condition", {
        opacity:0,
        transform:'translateY(300px)',
       }, "same-time-out")
      falsetl.to(".hambargar-clicked-section .nav-links a", {
        opacity:0,
        stagger:0.2,
        transform:'translateX(-200px)',
        scrub:1,
       })
      falsetl.to(menuRef.current, {
        duration: 0.5,
        height: "0vh",
        opacity:0,
         ease: 'power3.inOut'
        })
        
    }
  }, [navClick]);

  const handleNavClick = () => {
    setNavClick(!navClick);
  };

  return (
    <>
      <header className="navbar-container">
        <div className="left-navbar">
          <h1>Anuj Prajapati</h1>
        </div>
        <div className="right-navbar">
          <div className='cv-btn' >
          <a href={DownloadCV} download>Download CV</a>
          </div>
          <div className='hambargar-icon'>
            {navClick ? "" :      
               <Link to={""} onClick={handleNavClick}>Menu</Link>    
              }
          </div>
        </div>
      </header> 
      <div ref={menuRef} className={`hambargar-clicked-section ${navClick ? 'open' : ''}`}>
        <div className="menu-btn">
          <div className="open-btn" onClick={handleNavClick}>
            MENU
            <p></p>
          </div>
          <div className="close-btn" onClick={handleNavClick}>
            CLOSE
            <p></p>
          </div>
        </div>
        <div className="nav-links">
          {['home', 'about', 'services', 'projects', 'testimonials', 'contact'].map((section, index) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={1500}
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={handleNavClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <p></p>
            </ScrollLink>
          ))} 
        </div>
        <div className="terms_condition">
          <div className="developer_name">
            <h4>Developed By: <span>Anuj Prajapati</span></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
