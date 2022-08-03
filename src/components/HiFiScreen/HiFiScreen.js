import React from 'react';
import './hifiscreen.css'

const HiFiScreen = (props) => {
  return (
    <div className='hifi-screen'>
        <img src={props.img} alt={props.img} style={{width: '240px'}}/>
        <p className='small-text'>{props.screenName}</p>
    </div>
  )
}

export default HiFiScreen