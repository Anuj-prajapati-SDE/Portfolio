import "./AboutExplain.css"
import AboutExplainAnimation from '../../Animation/AboutExplainAnimation'
function AboutExplain() {
  AboutExplainAnimation() 
  return ( 
    <section className='About-Explain-section'>
      
      <div className='About-Explain background-shadow'>
        <div className="title-left">
          <h1><span>E</span>xperience</h1>
        </div>
        <div className="title-explaination"> 
          <p>
          Completed 4 Month Internship  – At Morling Global Private Limited (February 2025 – July ) Developing scalable web applications using the MERN stack, optimizing performance, and ensuring seamless user experiences.  </p>
          <span>...</span>
        </div> 
      </div>
      <div className='About-Explain background-shadow'>
        <div className="title-explaination">
          <p>
          I excel in Mern-stack development, crafting responsive and intuitive user interfaces with React.js, seamlessly integrated with robust back-end systems for high-performing web applications.
          </p>
          <span>...</span>
        </div>
      <div className="title-left skill">
          <h1><span>S</span>kill</h1>
        </div> 
      </div>
      <div className='About-Explain background-shadow'>
     
        <div className="title-left">
          <h1><span>F</span>reelancer</h1>
        </div> 
        <div className="title-explaination">  
          <p>
            Focused on creating visually stunning interfaces and exceptional user experiences. Every click is crafted for user-friendly, efficient, and meaningful products.
          </p>
          <span>...</span> 
      
      </div>  
      </div>
        
        <div className="About-thinking">
          <p>"Welcome to a world of innovation and learning! Let's build, grow, and explore technology together. 🚀"</p>
        </div>
     
    </section>
  )
}

export default AboutExplain 