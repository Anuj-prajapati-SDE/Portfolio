import './App.css'
import "./variable.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SmoothScrolling from './Animation/SmoothScroll'
import Protfolio_container from './pages/Protfolio-container/Protfolio-container'
// import AllProjects from './Components/AllProjects/ProjectDetails'
// import AboutMe from './Components/About-me/AboutUs'
import MouseFollower from "./Animation/MouseFollower"

import { account, databases, storage } from './config/appwrite';

function App() {
  const windowWidth =window.innerWidth;
  return (
    <> 
           
      <SmoothScrolling>
        {windowWidth>550 && <MouseFollower></MouseFollower>}
        <Router>
          <Routes> 
               <Route path='/' element={<Protfolio_container />} />
               {/* <Route path='/about' element={<AboutMe></AboutMe>} /> */}
               {/* <Route path='/all-projects' element={<AllProjects />} /> */}
          </Routes>
        </Router> 
          
      </SmoothScrolling> 
    </>
  )
} 
 
export default App
