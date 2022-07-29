import React from 'react';
import './divcarousel.css'

const DivCarousel = ({children}) => {
  return (
    <div className='div-carousel'>
        {children}
    </div>
  )
}

export default DivCarousel