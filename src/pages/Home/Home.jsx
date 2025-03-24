import React from 'react'
import './Home.css'

function Home() {
  let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentSec = currentTime.getMinutes();
  return ( 
    <>
      <section id='home' className='hero-section'>
        <div className="top-heading">
          <p className='title-heading'><span>M</span>ERN</p>
          <div className='user-img'>
            <p>Currently Available FOR <br /> 
             Doing Work</p>
            <p>My local Time {`${currentHours}:${currentSec} `}
            GMT (+5:30)</p>
          </div>  
        </div> 
        <div className="bottom-heading">  
         <h2><span>S</span>tack</h2> 
          <h1><span>D</span>eveloper</h1>
        </div>
      </section> 
 
    </>
  ) 
}

export default Home