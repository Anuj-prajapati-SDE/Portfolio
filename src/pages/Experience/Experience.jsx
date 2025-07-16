import React, { useState } from 'react'
import './Experience.css'
import ExperienceAnimation from '../../Animation/ExperienceAnimation'
import Projects from '../Projects/Projects';

function Experience() {
  const [ProjectRightTrue , setProjectRightTrue] = useState(false);
  ExperienceAnimation(ProjectRightTrue)    

  return (  
    <>
      <section id='projects' className='Work-project-section'>
        <h1>PROJECTS I </h1> 
        <h1>WORKED ON</h1>
        <h1>24-25</h1>
        <span>Y</span>   
      </section>
      <Projects/>
    </>
  )
}

export default Experience