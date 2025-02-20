import React from 'react';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Footer() {
    return ( 
        <>
            <section id='Footer-section' className="footer">
                <div className="footer_top">
                    <div className="footer_top_left">
                        <ScrollLink to="home" smooth={true} duration={2000}>Home</ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={1500}>About</ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={1500}>Services</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={1000}>Projects</ScrollLink>
                        <ScrollLink to="testimonials" smooth={true} duration={1000}>Testimonials</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                    </div>
                    <div className="footer_top_middle">
                        <h1> 
                            Join our mailing list for the <br />
                            latest updates.
                        </h1>
                        <input type="email" placeholder="Enter your Email Address..." />
                        <Link to={'mailto:anujprajapa3@gmail.com'}>
                        <button>
                            Anuj Prajapati <i className="ri-arrow-right-up-line" />
                        </button>
                        </Link>
                    </div>
                    <div className="footer_top_left"> 
                        <ScrollLink to="home" smooth={true} duration={2000}>Home</ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={1500}>About</ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={1000}>Services</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={1000}>Projects</ScrollLink>
                        <ScrollLink to="testimonials" smooth={true} duration={1000}>Testimonials</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="image_and_bottom_container">
                        <h1>Thanks for Coming</h1>
                        <div className="bottom_container">
                            <div className="bottom_left">
                                <ScrollLink to="privacy-policy" smooth={true} duration={500}>Privacy Policy</ScrollLink>
                                <ScrollLink to="terms-of-use" smooth={true} duration={500}>Terms of Use</ScrollLink>
                            </div>
                            <div className="bottom_middle">
                                <p>© 2024-2025 ANUJ PRAJAPATI. All rights reserved.</p>
                            </div>
                            <div className="bottom_right">
                                     <Link to={"https://www.instagram.com/anuj_prajapati_.123/"} target='_blank'>  <i className="ri-instagram-line" /></Link>
                                     <Link to={"https://www.linkedin.com/in/anuj-prajapati-1775552a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank'>  <i className="ri-linkedin-box-fill" /></Link>
                                     <Link to={"https://github.com/Anuj-prajapati-SDE"} target='_blank'> <i className="ri-github-fill" /></Link>
                              
          
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
