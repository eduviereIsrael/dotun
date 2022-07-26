import React from 'react';
import AnimatePage from '../../AnimatePage';

const Hero = () => {
  return (
    <div>
        <AnimatePage>
            <div className='hero-intro'>
                <h1 className='hero-h1-text'>
                    <span className='gradient'>Design </span><span className='for'>For </span><span className='all'>All</span>
                </h1>
                <p className='hero-text'>
                    I am a user-experience and Interface designer that put real people 
                    at the center of development process
                </p>
                <a href="#projects" className='primary-btn'>Go to Projects</a>
            </div>
        </AnimatePage>
        
        <div className='hero-img'>
            {/* <img src={images.herobgmobile} alt="" className='heroimg-mobile'/> */}
        </div>
        
    </div>
  )
}

export default Hero