import React from 'react';
import './imgcarousel.css'

const ImgCarousel = (props) => {

  return (
    <div className='mockups'>
        {props.carousel.map((img, i) => (
            <img src={img} key={i} alt={`carousel ${i}`} style={{width: props.width}} className={`carousel-img ${props.class}`} />
        ))}
    </div>
  )
}

export default ImgCarousel