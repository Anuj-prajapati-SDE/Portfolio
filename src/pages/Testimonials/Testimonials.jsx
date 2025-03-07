import React from 'react'
import "./Testimonials.css"
import Customer_img_1 from "../../assets/customer-img-1.jpeg"
import Customer_img_2 from "../../assets/customer-img-2.jpeg"
import Customer_img_3 from "../../assets/customer-img-3.jpeg"
// import TestinominalAnimation from '../../Animation/testinominal.js'
function Testimonials() {
  //  TestinominalAnimation()
  return ( 
    <>   
    <section id='testimonials' className='Testimonials-section'>
        <h1>WHAT</h1> 
        <h1>PEOPLE SAY</h1>
        <h1>ABOUT <span>ME</span></h1> 
     </section>
     <section className='Testimonials-person-section'>
       <div className="Testimonials-person">
         <div className='Testimonials-person-count'>
            <span>01</span>
            <img src={Customer_img_1} alt="" />
         </div>
         <div className='Testimonials-person-name'>
              <h1>Ravi Kumar</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
             "Working with Anuj Prajapati was a game-changer for our business. He developed a sleek, user-friendly website that has significantly improved our online presence. Anuj's expertise in MERN-stack development and his creative approach to design have made a huge difference. We highly recommend his services to anyone looking for top-notch web development."
             </p>
         </div>
       </div>
       <div className="Testimonials-person">
         <div className='Testimonials-person-count'>
            <span>02</span>
            <img src={Customer_img_2} alt="" />
         </div>
         <div className='Testimonials-person-name'>
              <h1>Amit Verma</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
             I had the pleasure of collaborating with Anuj Prajapati on a complex web application project. His technical skills and problem-solving abilities are outstanding. Anuj's ability to understand our requirements and translate them into a functional and visually appealing application was impressive. I highly recommend him for any web development project.
             </p>
         </div>
       </div>
       <div className="Testimonials-person">
         <div className='Testimonials-person-count'>
            <span>03</span>
            <img src={Customer_img_3} alt="" />
         </div>
         <div className='Testimonials-person-name'>
              <h1>Sachin gupta</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
             "Anuj Prajapati's dedication and passion for web development are evident in his work. He created a stunning portfolio website for me that perfectly showcases my skills and projects. Anuj's creativity and technical expertise have exceeded my expectations. I am grateful for his hard work and highly recommend him to anyone in need of a talented web developer."
             </p>
         </div>
       </div>

     </section>
    </>
  )
}

export default Testimonials