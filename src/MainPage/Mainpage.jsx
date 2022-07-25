import React from 'react'
import './mainpage.css'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'

const Mainpage = () => {
  return (
    <div className='mainpage'>
      <Hero />
      <Marquee />
    </div>
  )
}

export default Mainpage