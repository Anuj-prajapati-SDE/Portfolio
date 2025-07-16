import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function Footer() {
 
    return ( 
        <>
            <section id='Footer-section' className="footer">
                <div className="footer_bottom">
                    <div className="image_and_bottom_container">
                        <h1><span>Thanks</span> <span>for</span> <span>Coming</span> </h1>
                        <div className="bottom_container">
                            <div className="bottom_left">
                                <ScrollLink to="privacy-policy" smooth={true} duration={500}>Privacy Policy</ScrollLink>
                                <ScrollLink to="terms-of-use" smooth={true} duration={500}>Terms of Use</ScrollLink>
                            </div>
                            <div className="bottom_middle">
                                <p>© 2024-2025 ANUJ PRAJAPATI. All rights reserved.</p>
                            </div>
                            <div className="bottom_right">
                                     <Link to={"https://www.instagram.com/anuj_prajapati_.123/"} target='_blank'><FaInstagramSquare /></Link>
                                     <Link to={"https://www.linkedin.com/in/anuj-prajapati-1775552a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank'><TbBrandLinkedinFilled /></Link>
                                     <Link to={"https://github.com/Anuj-prajapati-SDE"} target='_blank'><FaGithub /></Link>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
