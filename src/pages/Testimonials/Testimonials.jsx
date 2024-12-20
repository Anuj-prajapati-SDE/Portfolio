import React from 'react'
import "./Testimonials.css"
import Customer_img_1 from "../../assets/customer-img-1.jpeg"
import Customer_img_2 from "../../assets/customer-img-2.jpeg"
import Customer_img_3 from "../../assets/customer-img-3.jpeg"
import TestinominalAnimation from '../../Animation/testinominal.js'
function Testimonials() {
   TestinominalAnimation()
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
              <h1>Jon doe</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero consequatur veritatis debitis dolores excepturi laudantium explicabo et nemo, voluptatem odit ad tempora corporis. Neque tempore expedita architecto officia doloremque?
             </p>
         </div>
       </div>
       <div className="Testimonials-person">
         <div className='Testimonials-person-count'>
            <span>02</span>
            <img src={Customer_img_2} alt="" />
         </div>
         <div className='Testimonials-person-name'>
              <h1>Jon doe</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero consequatur veritatis debitis dolores excepturi laudantium explicabo et nemo, voluptatem odit ad tempora corporis. Neque tempore expedita architecto officia doloremque?
             </p>
         </div>
       </div>
       <div className="Testimonials-person">
         <div className='Testimonials-person-count'>
            <span>03</span>
            <img src={Customer_img_3} alt="" />
         </div>
         <div className='Testimonials-person-name'>
              <h1>Jon doe</h1>
         </div>
         <div className='Testimonials-person-response'>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, libero consequatur veritatis debitis dolores excepturi laudantium explicabo et nemo, voluptatem odit ad tempora corporis. Neque tempore expedita architecto officia doloremque?
             </p>
         </div>
       </div>

     </section>
    </>
  )
}

export default Testimonials