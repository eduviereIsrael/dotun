import React from 'react';
import './mainpage.css';
import { Hero, Marquee, Works } from './sections';

const Mainpage = () => {
  return (
      <div className='mainpage'>
        <Hero />
        <Marquee />
        <Works />
      </div>
    
  )
}

export default Mainpage