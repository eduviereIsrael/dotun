import React from 'react';
import { images } from '../../constants/images';

const Hero = () => {
  return (
    <div>
        <div className='hero-intro'>
            <h1 className='hero-h1-text'>
                <span className='gradient'>Design </span><span className='gradient'>For </span><span className='gradient'>All</span>
            </h1>
            <p className='hero-text'>
                I am a user-experince and Interface designer that put real people 
                at the center of development process
            </p>
            <a href="/" className='primary-btn'>Go to Projects</a>
        </div>
        <div className='hero-img'>
            <img src={images.herobgmobile} alt="" className='heroimg-mobile'/>
        </div>
        
    </div>
  )
}

export default Hero