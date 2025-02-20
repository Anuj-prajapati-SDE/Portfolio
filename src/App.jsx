import './App.css'
import "./variable.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SmoothScrolling from './Animation/SmoothScroll'
import Protfolio_container from './pages/Protfolio-container/Protfolio-container'
import AllProjects from './Components/AllProjects/AllProjects'
import MouseFollower from "./Animation/MouseFollower"

function App() {
  return (
    <>
      <SmoothScrolling>
      <MouseFollower></MouseFollower>
        <Router>
          <Routes> 
               <Route path='/' element={<Protfolio_container />} />
               <Route path='/all-projects' element={<AllProjects />} />
          </Routes>
        </Router> 
          
      </SmoothScrolling>
    </>
  )
} 
 
export default App
