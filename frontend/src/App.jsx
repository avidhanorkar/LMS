import React from 'react'
import Navbar from './components/Common/Navbar'
import LandingPage from './pages/LandingPage'
import Footer from './components/Common/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Courses from './pages/Courses'
import { AuthProvider } from './context/auth.context'
import MyCourses from './pages/MyCourses'
import CoursePage from './pages/CoursePage'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mylearning" element={<MyCourses />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App