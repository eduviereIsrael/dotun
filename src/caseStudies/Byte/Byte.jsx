import React from 'react';
import '../casestudies.css'
import './Byte.css';
import { useStateContext } from '../../StateContext';

const Byte = () => {

  const project = useStateContext();
  const byte = {...project[0]}
  const {name, intro, bgColor, introMockups} = byte
  console.log(byte)
  return (
    <div className='project_container'>
      <div className='banner' style={{background: bgColor}}>
        <div className='banner-intro'>
          <h1> 
            {name}
          </h1>
          <p>{intro}</p>
        </div>
        <div>
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img1' />
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img2' />
        </div>
      </div>
      <div className='introMockups'>
        {introMockups.map((img, i) => (
          <img src={img} key={i} alt={`mockup carousel ${i}`} className='mockup-carousel-img' />
        ))}
      </div>
    </div>
  )
}

export default Byte