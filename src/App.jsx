import './App.css'
import "./variable.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SmoothScrolling from './Animation/SmoothScroll'
import Protfolio_container from './pages/Protfolio-container/Protfolio-container'
import AllProjects from './Components/AllProjects/AllProjects'
import AboutMe from '../src/Components/About-me/AboutMe'
import MouseFollower from "./Animation/MouseFollower"

// import { app, analytics } from "../config/firebaseConfig"; // Import Firebase setup
function App() {
  const windowWidth =window.innerWidth;
  return (
    <>        
      <SmoothScrolling>
        {windowWidth>550 && <MouseFollower></MouseFollower>}
        <Router>
          <Routes> 
               <Route path='/' element={<Protfolio_container />} />
               <Route path='/about' element={<AboutMe></AboutMe>} />
               <Route path='/all-projects' element={<AllProjects />} />
          </Routes>
        </Router> 
          
      </SmoothScrolling>
    </>
  )
} 
 
export default App
