import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Homes from './components/Homes/Homes'
import Property from './components/Property/Property'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Homes />
      <Property />
    </div>
  )
}

export default App