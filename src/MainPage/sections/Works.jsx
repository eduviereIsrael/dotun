import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { project } from '../../constants/project';

const Works = () => {
  return (
    <div className='works'>
        <div className='intro'>
            <h2 className='gradient'>Projects</h2>
            <p>Top curated products I have worked on</p>
        </div>
        <div className='works-container'>
          {project.map((item) => (
            <ProjectCard project = {item} />
          ))}
            {/* <ProjectCard /> */}
        </div>
        
    </div>
  )
}

export default Works