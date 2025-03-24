import React, { useState } from 'react'
import './Experience.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import ProjectImg_1 from "../../assets/project-img-1.png";
import ProjectImg_2 from "../../assets/project-img-2.png";
import ExperienceAnimation from '../../Animation/ExperienceAnimation'
import { Link } from 'react-router-dom';

function Experience() {
  const [ProjectRightTrue , setProjectRightTrue] = useState(false);
  ExperienceAnimation(ProjectRightTrue) 
 function reload(){ 
window.reload()}   
const nextProjectClick  = ()=>{ 
   setProjectRightTrue(true)
} 
const preProjectClick  = ()=>{
  setProjectRightTrue(false) 
}
  return (  
    <>
      <section id='projects' className='Work-project-section'>
        <h1>PROJECTS I </h1> 
        <h1>WORKED ON</h1>
        <h1>24-25</h1>
        <span>Y</span>  
      </section>
      <section className='Work-project-show-section'> 
        <div className="Work-project-show-container">
        <div className='project-frame-count-name background-shadow'>
          <div className="project-work-frame">
            <div className="img-frames">
            <div className=" work-frame project-work-frame-1">
               <img src={ProjectImg_1} alt="" />
            </div>
            <div className=" work-frame project-work-frame-2">
               <img src={ProjectImg_2} alt="" />
            </div>
            </div> 
          </div> 
          <div className='project-count-name '>
          <div className="project-count">
            <span>
              <p className='project-count-1'>01</p>
              <p className='project-count-2'>02</p>
            </span>
            <span>/02</span>
          </div>
          <div className="project-name"> 
            <h2 className="project-1-name">Code-Quest</h2>
            <h2 className="project-2-name">Skill Vedaa</h2>       
          </div>
          </div>
        </div>
        <div className='project-frame '> 
          <div className="view-first-project" onClick={preProjectClick}>
          <FaAngleDoubleLeft />
          </div> 
          <div className="img-frames project-frame-img-frame-1">
            <Link to={"https://codequest-frontend.onrender.com"} target='_blank'>
             <img src={ProjectImg_1} alt="" />        
            </Link>
             <Link to={"https://codequest-frontend.onrender.com"} className='Project-link'><p>View Project <span><FaArrowCircleRight /></span></p></Link>
          </div>
          <div className="img-frames project-frame-img-frame-2"> 
          <Link to={"https://skillvedaa.in/"} target='_blank'>
            <img src={ProjectImg_2} alt="" />
          </Link>
          <Link to={"https://skillvedaa.in/"} className='Project-link'><p>View Project <span><FaArrowCircleRight /></span></p></Link>
          </div> 
          <div className="view-second-project" onClick={nextProjectClick}>
          <FaAnglesRight />
            </div>    
        </div>
        <div className='project-year-role-description background-shadow'>
          <div className="project-year">
            <h3>Year</h3>
            <div className='year-container'>
              <h3 className='year-1'>2024</h3>
              <h3 className='year-2'>2025</h3>
            </div>
          </div>
          <div className="project-role">
             <h3>Role</h3>
             <div className="roles">
              <p className='role-1'>FullStack Developer</p>
              <p className='role-2'>FullStack Developer</p>
             </div>          
          </div>
          <div className="projects-description"> 
          <h4>Description:</h4>
          <div className="description"> 
          <p className='project-1-description'> 
          A MERN stack-based coding competition website designed to facilitate teacher student interactions. The platform provides features such 
          as live feedback, progress tracking, and real-time communication to enhance the learning experience
          </p>
          <p className='project-2-description'>
          SkillVedaa, a unit of Morling Global Pvt Ltd., is a premier upskilling and training platform. In which incudes a multiple featured such as live classes, payment gateways, and a user-friendly interface.
          </p>
          </div>
          </div>
          <div className="All-project-link"> 
            <Link to={"/all-projects"} onClick={reload}>View All Projects</Link>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Experience