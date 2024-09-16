import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { Element } from 'react-scroll'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Element name='about' />
      <About />
      <Element name='services' />
       <Service /> 
      <Element name='projects' />
      <Portfolio />
      <Element name='contact' />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
 