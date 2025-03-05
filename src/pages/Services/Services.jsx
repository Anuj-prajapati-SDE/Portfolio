import React from 'react'
import "./Services.css" 
import Res_screenShot from "../../assets/responsive-screenshot-img.webp"
import code_screenShot from "../../assets/code-screenshot-img.webp"
import ServiceAnimation from '../../Animation/ServiceAnimation'
function Services() {
    ServiceAnimation()
    return (
        <>
            <section id='services' className='Services-section'>
                <h1>WHAT</h1> 
                <h1>SERVICES I</h1>  
                <h1>PROVIDE</h1>  
            </section> 
            <section className='Services-content-section'>
                <section className='Services-about'>
                    <div className='Services-about-text-container'>
                     <h1>Blending Creativity with Functionality</h1>
                    <p>I am a passionate and dedicated Mern Stack developer, specializing in creating unique and effective design solutions. With extensive experience in web, apps, and branding, as well as effective UX/UI design, I have collaborated with companies of all types, both nationally and internationally, ensuring efficiency and flexibility in every project.</p>
                    </div>
                    <div className='Services-experience-boxes'>
                        <div className="experience-box">
                            <h2>1+</h2>
                            <p> Year of <br/>Experience</p>
                        </div>
                        <div className="experience-box">
                        <h2>5+</h2>
                        <p> Successfull <br/>Project</p>
                        </div>
                        <div className="experience-box">
                         <h2>100%</h2>
                        <p>Secure code</p>
                        </div>
                        <div className="experience-box">
                        <h2>100%</h2>
                        <p>Professinal &<br/>Quality Code</p>
                        </div>
                    </div> 
                </section>
                <section className='Services-about-2'>
                       <div className='service-responsive-screenshot'>
                           <h2>Responsive Web</h2>
                           <img src={Res_screenShot} alt="" />
                       </div>
                       <div className='service-code-screenshot'> 
                       <h2>Simple and Efficient Code</h2>
                       <img src={code_screenShot} alt="" />
                       </div>
                </section>
                       <div className='technology-knows-container'>
                        <h1>Teachnology knows</h1>
                        <div className="tech-heading-icon-container">
                            <div className="heading-icon">
                                <span><i className="ri-html5-line"></i></span>
                                <h2>Html</h2>
                            </div>
                            <div className="heading-icon">
                                <span><i className="ri-css3-line"></i></span>
                                <h2>CSS</h2>
                            </div>
                            <div className="heading-icon">
                                <span><i className="ri-javascript-line"></i></span>
                                <h2>JavaScript</h2>
                            </div>
                            <div className="heading-icon">
                                <span><i className="ri-reactjs-line"></i></span>
                                <h2>React</h2>
                            </div>
                            <div className="heading-icon">
                                <span><box-icon type='logo' name='redux'></box-icon></span>
                                <h2>Redux ToolKit</h2>
                            </div>
                            <div className="heading-icon">
                                <span><i className="ri-tailwind-css-line"></i></span>
                                <h2>Tailwind CSS</h2>
                            </div>
                            <div className="heading-icon">
                                <span><i className="ri-nodejs-line"></i></span>
                                <h2>Node JS</h2>
                            </div>
                            <div className="heading-icon">
                                <span></span>
                                <h2>Express JS</h2>
                            </div>
                            <div className="heading-icon">
                                <span><box-icon type='logo' name='mongodb'></box-icon></span>
                                <h2>Mongodb</h2>
                            </div>
                            <div className="heading-icon">
                                <span><img src="https://1stwebdesigner.com/wp-content/uploads/2019/11/gsap-animation-01.png" /></span>
                        
                            </div>
                            <div className="heading-icon">
                                <span></span>
                                <h2>Lenis & Locomotive</h2>
                            </div> 
                        </div>
                       </div>
            </section>
        </>
    )
}

export default Services