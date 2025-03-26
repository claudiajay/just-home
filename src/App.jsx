import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Homes from './components/Homes/Homes'
import Property from './components/Property/Property'
import Choose from './components/Choose/Choose'
import HowItWorks from './components/HowItWorks/HowItWorks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Homes />
      <Property />
      <Choose />
      <HowItWorks />
    </div>
  )
}

export default App