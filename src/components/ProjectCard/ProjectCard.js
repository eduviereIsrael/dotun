import React from 'react';
import './projectcard.css';
import {Link} from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div className='card'>
        <div className='card-intro'>
            <h3 className='gradient'>{project.name}</h3>
            <p className='small-text'>short description</p>
            <Link to={project.linkUrl} className='primary-btn'>View</Link>
        </div>
        <div className='card-img'>
          <img src={project.img} alt={project.name} />
        </div>
    </div>
  )
}

export default ProjectCard