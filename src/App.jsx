import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tournaments from './components/Tournaments'
import Contact from './components/Contact'
import Subhero from './components/Sub-hero'

function App() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <About />
      <Tournaments />
      <Subhero />
      <Contact />    
    </div>
  )
}

export default App