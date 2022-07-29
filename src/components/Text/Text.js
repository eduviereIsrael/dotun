import React from 'react';
import './text.css';
import { images } from '../../constants/images';

const Text = (props) => {

  const {textHeaderIcon} = images
  return (
    <div className = {`text-container ${props.class}`}>
        <div className='text-header'>
            <img src={textHeaderIcon} alt='text-header-icon' />
            <h3>{props.header}</h3>
        </div>
        <p>{props.text}.</p>
    </div>
  )
}

export default Text