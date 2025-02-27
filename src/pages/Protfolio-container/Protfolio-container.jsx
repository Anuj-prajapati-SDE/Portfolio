import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import AboutExplain from '../AboutExplain/AboutExplain'
import ScrollSlide from '../ScrollSlide/ScrollSlide'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Loader from '../../Loader/Loader'
import './Profolio_container.css'
function Protfolio_container() {
  const windowWidth =window.innerWidth;
  return (
    <>
      <div className='Protfolio_container'>
        <div id='stars' className='stars'></div>
        <div id='stars2' className='stars'></div>
        <div id='stars3' className='stars'></div>
        <Loader />
        <Navbar></Navbar>
        <Home></Home> 
        <About></About>
        <Services></Services>
        <AboutExplain></AboutExplain> 
        <div id='stars' className='stars'></div>
        <div id='stars2' className='stars'></div>
        <div id='stars3' className='stars'></div>
        {windowWidth>650 && <ScrollSlide></ScrollSlide>}
        <Experience></Experience>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <div id='stars' className='stars'></div>
        <div id='stars2' className='stars'></div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Protfolio_container