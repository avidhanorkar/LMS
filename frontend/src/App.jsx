import React from 'react'
import Navbar from './components/Common/Navbar'
import LandingPage from './pages/LandingPage'
import Footer from './components/Common/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Courses from './pages/Courses'
import { AuthProvider } from './context/auth.context'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App