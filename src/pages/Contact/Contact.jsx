import React, { useRef } from 'react';
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import ContactAnimation from '../../Animation/ContactAnimation';

function Contact() {
  ContactAnimation();
  const form = useRef();

  const notify = (message) => toast.success(message);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const userEmail = form.current.user_email.value;
    const userName = form.current.user_name.value;
    
    emailjs.sendForm(
      'service_58uqyzw',
      'template_37nds6h',
      form.current,
      'iGSMj9WgWrnMn2H18'
    ).then(
      (result) => {
        console.log('Admin Email Sent:', result.text);
        notify('Your feedback has been sent successfully!');
        sendConfirmationEmail(userEmail, userName);
      },
      (error) => {
        console.log('Error:', error.text);
        toast.error('Failed to send feedback. Please check your email.');
      }
    );

    e.target.reset();
  };

  const sendConfirmationEmail = (userEmail, userName) => {
    const templateParams = {
      user_email: userEmail,
      user_name: userName,
    };

    emailjs.send(
      'service_58uqyzw',
      'template_user_reply',
      templateParams,
      'iGSMj9WgWrnMn2H18'
    ).then(
      (result) => {
        console.log('User Confirmation Email Sent:', result.text);
      },
      (error) => {
        console.log('Error Sending Confirmation Email:', error.text);
      }
    );
  };

  return (
    <section className='contact-section'>
      <h1>CONTACT US</h1>
      <div id='contact' className='contact-links'>
        <div className="contact-link">
          <Link to={"https://www.linkedin.com/in/anuj-prajapati-1775552a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank'>
            <span className='link-icon'><TbBrandLinkedinFilled /></span>
            <h2>Linked In</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://www.instagram.com/anuj_prajapati_.123/"} target='_blank'>
            <span className='link-icon'>
             <FaInstagramSquare />
            </span>
            <h2>Instagram</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://github.com/Anuj-prajapati-SDE"} target='_blank'>
            <span className='link-icon'>
              <FaGithub />
            </span>
            <h2>GitHub</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to="mailto:anujprajapa3@gmail.com" target='_blank'>
            <span className='link-icon'><MdMarkEmailRead /></span>
            <h2>anujprajapa3@gmail.com</h2>
          </Link>
        </div>
        <div className="contact-link">
          <Link to={"https://maps.app.goo.gl/PuF2iUwHBUpGdqLb6"} target='_blank'>
            <span className='link-icon'><IoLocationSharp /></span>
            <h2>https://maps.app.goo.gl/PuF2iUwHBUpGdqLb6</h2>
          </Link>
        </div>
      </div>
      <p className='contact-paira'>Get In Touch with Us and Start<br /> Building Your Idea.</p>
      <div className='contact-form-section'>
        <div className='left-contact-form'>
          <form ref={form} onSubmit={sendEmail} className='feedback-form'>
            <p>Fill out the form and we'll contact you.</p>
            <div className='contact-name-email'>
              <input type='text' name='user_name' placeholder='Your Name' required />
              <input type='email' name='user_email' placeholder='Your Email' required />
            </div>
            <div className='contact-number-textarea-btn'>
              <input type='tel' name='user_number' placeholder='Your Number' maxLength='12' minLength='10' required />
              <textarea name='message' placeholder='Write Your Feedback..' required></textarea>
              <button type='submit'>SEND OUT <i className='ri-arrow-right-fill'></i></button>
            </div>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
