import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import DownloadCV from '../../assets/Anuj-prajapati-Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [navClick, setNavClick] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]); 

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const heightValue = windowWidth < 550 ? "80vh" : windowWidth < 850 ? "81vh" : "86.6vh";

    const timeline = gsap.timeline();
 
    if (navClick) {
      timeline.to(menuRef.current, {
        duration: 0.6, 
        height: heightValue,
        opacity: 1,
        ease: 'power3.inOut'
      })
      .to(".hambargar-clicked-section .menu-btn, .hambargar-clicked-section .terms_condition", {
        opacity: 1,
        transform: 'translateY(0px)'
      })
      .to(".hambargar-clicked-section .nav-links a", {
        opacity: 1,
        stagger: 0.2,
        transform: 'translateX(0px)',  
  
        scrub: 2
      });
    } else {
      timeline.to(".hambargar-clicked-section .menu-btn", {
        opacity: 0,
        transform: 'translateY(-200px)'
      }, "same-time-out")
      .to(".hambargar-clicked-section .terms_condition", {
        opacity: 0,
        transform: 'translateY(300px)'
      }, "same-time-out")
      .to(".hambargar-clicked-section .nav-links a", {
        opacity: 0,
        stagger: 0.2,
        transform: 'translateX(-200px)',
        scrub: 1
      })
      .to(menuRef.current, {
        duration: 0.5,
        height: "0vh",
        opacity: 0,
        ease: 'power3.inOut'
      });
    }
  }, [navClick]);

  return (
    <>
      <header className="navbar-container background-shadow ">
        <div className="left-navbar">
          <h1>Anuj Prajapati</h1>
        </div>
        <div className="right-navbar">
          <div className='cv-btn'>
            <a href={DownloadCV} download>Resume</a>
          </div>
          <div className='hambargar-icon'>
            {!navClick && <Link to={""} onClick={() => setNavClick(true)}>Menu</Link>}
          </div>
        </div>
      </header>
      <div ref={menuRef} className={`hambargar-clicked-section background-shadow ${navClick ? 'open' : ''}`}>
        <div className="menu-btn">
          <div className="open-btn" onClick={() => setNavClick(false)}>MENU<p></p></div>
          <div className="close-btn" onClick={() => setNavClick(false)}>CLOSE<p></p></div>
        </div>
        <div className="nav-links">
          {["home", "about", "unique", "projects", "testimonials", "contact"].map((section, index) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={1500}
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={() => setNavClick(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}<p></p>
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
