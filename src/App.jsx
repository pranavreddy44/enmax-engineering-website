import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedSolutions from './components/FeaturedSolutions'
import CompanyHighlights from './components/CompanyHighlights'
import TrustedCompanies from './components/TrustedCompanies'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AboutUs from './pages/AboutUs'
import Solutions from './pages/Solutions'
import WorkArea from './pages/WorkArea'
import ContactUs from './pages/ContactUs'

// Enhanced Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedSolutions />
      <CompanyHighlights />
      <TrustedCompanies />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/workarea" element={<WorkArea />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
