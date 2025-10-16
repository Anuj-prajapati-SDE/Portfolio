import './App.css'
import "./variable.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SmoothScrolling from './Animation/SmoothScroll'
import Protfolio_container from './pages/Protfolio-container/Protfolio-container'
import MouseFollower from "./Animation/MouseFollower"

import { account, databases, storage } from './config/appwrite';
import LoginPage from './pages/Auth/LoginPage'
import ForgetPasswordPage from './pages/Auth/ForgetPassword'
import ResetPasswordPage from './pages/Auth/ResetPasswordPage'
import AdminDasboard from './pages/Admin/AdminDashboard'
import Error404 from './pages/Error/Error404';
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './private/ProtectedRoute'

function App() {
  const windowWidth =window.innerWidth;
  return ( 
    <> 
      <AuthProvider>  
        <SmoothScrolling>
          {windowWidth>550 && <MouseFollower></MouseFollower>}
          <Router>
            <Routes> 
                 <Route path='/' element={<Protfolio_container />} />
                 <Route path='/login' element={<LoginPage />} />
                 <Route path='/forgot-password' element={<ForgetPasswordPage />} />
                 <Route path='/reset-password' element={<ResetPasswordPage />} />
                 <Route path='/admin-dashboard' element={
                    <ProtectedRoute>
                      <AdminDasboard />
                    </ProtectedRoute>
                  } />
                 <Route path='*' element={<Error404 />} />
            </Routes>
          </Router>        
        </SmoothScrolling>
      </AuthProvider>  
    </>
  )
} 
 
export default App
