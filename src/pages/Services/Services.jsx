import React from 'react'
import "./Services.css" 
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa" ;
import { DiDocker } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";

import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa"; 
import { RiTailwindCssLine } from "react-icons/ri";
import cppIcon from '../../assets/cpp_icon.webp'
import { TbBrandRedux } from "react-icons/tb";
import Res_screenShot from "../../assets/responsive-screenshot-img.webp"
import code_screenShot from "../../assets/code-screenshot-img.webp"
// import ServiceAnimation from '../../Animation/ServiceAnimation'
function Services() { 
    // ServiceAnimation()
    return (
        <>
             <section id='services' className='Services-section'>
                <h1>WHAT</h1> 
                <h1>SERVICES I</h1>  
                <h1>PROVIDE</h1>  
             </section> 
             <section className='Services-content-section'>
                <section className='Services-about'>
                    <div className='Services-about-text-container background-shadow'>
                     <h1>Blending Creativity with Functionality</h1>
                    <p>I am a passionate and dedicated Mern Stack developer, specializing in creating unique and effective design solutions. With extensive experience in web, apps, and branding, as well as effective UX/UI design, I have collaborated with companies of all types, both nationally and internationally, ensuring efficiency and flexibility in every project.</p>
                    </div>
                    <div className='Services-experience-boxes'>
                        <div className="experience-box background-shadow">
                            <h2>1+</h2>
                            <p> Year of <br/>Experience</p>
                        </div>
                        <div className="experience-box background-shadow">
                        <h2>5+</h2>
                        <p> Successfull <br/>Project</p>
                        </div>
                        <div className="experience-box background-shadow">
                         <h2>100%</h2>
                        <p>Secure code</p>
                        </div>
                        <div className="experience-box background-shadow">
                        <h2>100%</h2>
                        <p>Professinal &<br/>Quality Code</p>
                        </div>
                    </div> 
                </section>
                <section className='Services-about-2'>
                       <div className='service-responsive-screenshot background-shadow'>
                           <h2>Responsive Web</h2>
                           <img src={Res_screenShot} alt="" />
                       </div>
                       <div className='service-code-screenshot background-shadow'> 
                       <h2>Simple and Efficient Code</h2>
                       <img src={code_screenShot} alt="" />
                       </div>
                </section>
                       <div className='technology-knows-container background-shadow'>
                        <h1>Professional Skillset</h1>
                        <div className="tech-heading-icon-container">
                            <div className="heading-icon">
                                <span><AiOutlineHtml5 /></span>
                                <h2>Html 5</h2>
                            </div>
                            <div className="heading-icon">
                                <span><IoLogoCss3 /></span>
                                <h2>CSS</h2>
                            </div> 
                            <div className="heading-icon">
                                <span><FaSquareJs /></span>
                                <h2>JavaScript</h2>
                            </div>
                            <div className="heading-icon">
                                <span><FaReact /></span>
                                <h2>React</h2>
                            </div>
                            <div className="heading-icon">
                                <span><TbBrandRedux /></span>
                                <h2>Redux</h2>
                            </div>
                            <div className="heading-icon">
                                <span><RiTailwindCssLine /></span>
                                <h2>Tailwind</h2>
                            </div>
                            <div className="heading-icon">
                                <span><FaBootstrap /></span>
                                <h2>Bootstrap</h2>
                            </div>
                            <div className="heading-icon">
                                <span><FaNodeJs /></span> 
                                <h2>Node JS</h2>
                            </div>
                            <div className="heading-icon">
                                <span><SiMongodb /></span>
                                <h2>Mongodb</h2>
                            </div>
                            <div className="heading-icon">
                                <span><FaGithubSquare /></span>
                                <h2>Git & GitHub</h2>
                            </div>
                            <div className="heading-icon">
                                <span><TbBrandReactNative /></span>
                                <h2>React Native</h2>
                            </div> 
                            <div className="heading-icon">
                                <span><img src={cppIcon}></img></span>
                                <h2>C</h2>
                            </div>    
                            <div className="heading-icon">
                                <span><img src={cppIcon}></img></span>
                                <h2>C++</h2>
                            </div>    
                            <div className="heading-icon">
                                <span><RiJavaLine /></span>
                                <h2>Java</h2>
                            </div>    
                            <div className="heading-icon">
                                <span><SiSpringboot /></span>
                                <h2>SpringBoot</h2>
                            </div>    
                              
                            <div className="heading-icon">
                                <span><DiDocker /></span>
                                <h2>Docker</h2>
                            </div>    
                        </div>
                       </div>
             </section>
        </>
    )
}

export default Services