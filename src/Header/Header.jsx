import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useStateContext } from '../StateContext';


const Header = () => {

  const [menuClick, setMenuClick] = useState(false)
  const { aboutClick, setAboutClick } = useStateContext();
  console.log(aboutClick)


  
  return (
    <>
      <div className='header section-padding'>
        <div className='desktop-view' onClick={() => setAboutClick(false)}>
            <Link to='/' className={aboutClick? '':'gradient'}><p>Work</p></Link>
        </div>
        <div onClick={() => setAboutClick(false)}>
          <Link to='/'><p className='logo'>Adedotun Ayodimeji</p></Link>
        </div>
        <div className='desktop-view' onClick={() => setAboutClick(true)}>
          <Link to='/about' className={aboutClick? 'gradient':''} ><p>About</p></Link>
        </div>
        <div className={menuClick? 'mobile-view hamburger-div spin': 'mobile-view hamburger-div'} onClick={() => setMenuClick(!menuClick)}>
          <div className='ham dis'></div>
          <div className='ham spins'></div>
          <div className='ham spins-i'></div>
          <div className='ham dis'></div>
        </div>
      </div>
      <div className = {menuClick? 'mobile-view mobile-menu clicked': 'mobile-view mobile-menu'}>
          <div className='menu-item' onClick={() => setMenuClick(!menuClick)}>
            <Link to='/about'><p>About</p></Link>
          </div>
          <div className='menu-item second' onClick={() => setMenuClick(!menuClick)}>
            <a href='#contact'><p>Contact me</p></a>
          </div>
      </div>
    </>
  )
}

export default Header