import React from 'react';
import './projectcard.css'

const ProjectCard = ({project}) => {
  return (
    <div className='card'>
        <div className='card-intro'>
            <h3 className='gradient'>{project.name}, activities</h3>
            <p className='small-text'>short description</p>
            <a href='/' className='primary-btn'>View</a>
        </div>
        <div className='card-img'>
          <img src={project.img} alt={project.name} />
        </div>
    </div>
  )
}

export default ProjectCard