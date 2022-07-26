import React from 'react';
import './projectcard.css'

const ProjectCard = (props) => {
  return (
    <div className='card'>
        <div className='card-intro'>
            <h3 className='gradient'>name, activities</h3>
            <p className='proj-text'>short description</p>
            <a href='/' className='primary-btn'>View</a>
        </div>
        <div className='card-img'></div>
    </div>
  )
}

export default ProjectCard