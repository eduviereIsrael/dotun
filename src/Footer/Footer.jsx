import React from 'react';
import './footer.css'
import { socials } from '../constants/images';


const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <p>
        Intrested in working together?<br/>
        I'd love to hear from you.
      </p>
      <div className='social-icons'>
        <div className='social-cont'>
          <a href="/" target="_blank">
            <div className='icon-div'>
              <img src={socials[0].img} alt="" />
              <h6>{socials[0].name}</h6>
            </div>
          </a>
          <a href="/" target="_blank">
            <div className='icon-div'>
              <img src={socials[1].img} alt="" />
              <h6>{socials[1].name}</h6>
            </div>
          </a>
          <a href="/" target="_blank">
            <div className='icon-div'>
              <img src={socials[2].img} alt="" />
              <h6>{socials[2].name}</h6>
            </div>
          </a>
          <a href="/" target="_blank">
            <div className='icon-div'>
              <img src={socials[3].img} alt="" />
              <h6>{socials[3].name}</h6>
            </div>
          </a>
        </div>

      </div>
      <div className='contact-email'>
        <a href="mailto:adedotunayodimeji@gmail.com">adedotunayodimeji@gmail.com</a>
        <p className='small-text'>@2022 Adedotun Ayodimeji</p>
      </div>
    </div>
  )
}

export default Footer