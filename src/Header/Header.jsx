import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {

  const [menuClick, setMenuClick] = useState(false)


  
  return (
    <>
      <div className='header section-padding'>
        <div className='desktop-view'>
          <Link to='/' className='gradient'><p>Work</p></Link>
        </div>
        <div>
          <Link to='/'><p className='logo'>Adedotun Ayodimeji</p></Link>
        </div>
        <div className='desktop-view'>
          <Link to='/about' className='gradient'><p>About</p></Link>
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