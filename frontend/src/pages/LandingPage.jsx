import Features from '@/components/LandingPage/Features'
import Hero from '@/components/LandingPage/Hero'
import Testimonials from '@/components/LandingPage/Testimonials'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-[#09090b] text-white'>
        <Hero />
        <Features />
        <Testimonials />
    </div>
  )
}

export default LandingPage