import React, { useState } from 'react';
import './header.css';
import { images } from '../constants/images';
import { Link } from 'react-router-dom';


const Header = () => {

  const [menuClick, setMenuClick] = useState(true)


  
  return (
    <div className='header section-padding'>

      <div className='desktop-view'>
        <a href='/'>Work</a>
      </div>
      <div>
        <Link to='/'>Adedotun Ayodimeji</Link>
      </div>
      <div className='desktop-view'>
        <a href='/'>About</a>
      </div>
      <div className='mobile-view hamburger-div' onClick={() => setMenuClick(!menuClick)}>
        {menuClick? 
          <img src={images.hambuger} alt='ham' className='hamburger'/> : 
          <img src={images.hambugerx} alt='ham' className='hamburger'/>
        }
      </div>
    </div>
  )
}

export default Header