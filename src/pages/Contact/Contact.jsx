import React from 'react'
import './Contact.css'
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom'
import Contact_video from '../../assets/contact-video.mp4'
// import ContactAnimation from '../../Animation/ContactAnimation'
function Contact() {
  // ContactAnimation();
  const form = useRef();
  const sendEmail = (e) => { 
    e.preventDefault();
    emailjs
      .sendForm("service_o1k9cqc", "template_6geg9m3", form.current, "iGSMj9WgWrnMn2H18")
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast("Feedback sent successfully!");

        },
        (error) => {
          console.log("Error:", error.text);
          toast("Failed to send feedback. Please try again.")
        }
      );
    e.target.reset();

  };
  return (
    <section className='contact-section'>
      <h1>CONTACTS</h1>
      <div id='contact' className='contact-links'>
        <div className="contact-link">
          <Link to={"https://www.linkedin.com/in/anuj-prajapati-1775552a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank'>
            <span className='link-icon'><i class="ri-linkedin-box-line"></i></span>
            <h2>Linked In</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://www.instagram.com/anuj_prajapati_.123/"} target='_blank'>
            <span className='link-icon'>
              <i class="ri-instagram-line"></i>
            </span>
            <h2>Instagram</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://github.com/Anuj-prajapati-SDE"} target='_blank'>
            <span className='link-icon'>
              <i class="ri-github-fill"></i>
            </span>
            <h2>GitHub</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to="mailto:anujprajapa3@gmail.com" target='_blank'>
            <span className='link-icon'><i class="ri-mail-send-line"></i></span>
            <h2>anujprajapa3@gmail.com</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://maps.app.goo.gl/PuF2iUwHBUpGdqLb6"} target='_blank'>
            <span className='link-icon'><i class="ri-map-pin-line"></i></span>
            <h2>https://maps.app.goo.gl/PuF2iUwHBUpGdqLb6</h2>
          </Link>
        </div>
      </div>
      <p className='contact-paira'>Get In Touch with Us and Start<br /> Building Your Idea.</p>
      <div className='contact-form-section'>
        <div className="left-contact-form">
          <form ref={form} onSubmit={sendEmail} className="feedback-form">
            <p>Fill out the form and we'll contact you.</p>
            <div className="contact-name-email">
              <input type="text" name="user_name" placeholder='Your Name' autoComplete='true' required />
              <input type="email" name="user_email" placeholder='Your Email' autoComplete='true' required />
            </div>
            <div className="contact-number-textarea-btn">
              <input type="tel" name="user_number" placeholder='Your Number' autoComplete='true' maxLength="12" minLength="10" required />
              <textarea placeholder='Write Your Feedback..' name="message" required></textarea>
              <button type='submit'>SEND OUT <i class="ri-arrow-right-fill"></i></button>
              <ToastContainer position="top-center"/>
            </div>
          </form>
        </div>
        <div className="right-contact-form">
        <video src={Contact_video} autoPlay loop muted playsInline>
  Your browser does not support the video tag.
</video>
{/* <img src={Contact_video} alt="" /> */}
        </div>
      </div>
    </section>
  )
}

export default Contact 