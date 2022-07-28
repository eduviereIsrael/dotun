import React from 'react';
import './text.css';
import { images } from '../../constants/images';

const Text = ({header, text}) => {

  const {textHeaderIcon} = images
  return (
    <div className='text-container'>
        <div className='text-header'>
            <img src={textHeaderIcon} alt='text-header-icon' />
            <h3>{header}</h3>
        </div>
        <p>{text}.</p>
    </div>
  )
}

export default Text