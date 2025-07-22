import React from 'react'
import './Loader.css'
import LoaderAnimation from '../Animation/LoaderAnimation'
function Loader() {
  LoaderAnimation();
  return (
    <section className='Loader-section'>
      <div className='loader-page'>
        <div className="title-portfolio">
          Developed Portfolio <br /><span>@2025</span>
        </div>
        <div className="name-show">
          <h3>Anuj<span> Prajapati</span><p className='name-last'> is a</p></h3>
        </div> 
        <div className="loader">
          <div class="dotted-loader"></div>
        </div>
      </div>
    </section>
  )
}

export default Loader