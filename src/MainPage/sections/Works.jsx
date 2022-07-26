import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Works = () => {
  return (
    <div className='works'>
        <div className='intro'>
            <h2 className='gradient'>Projects</h2>
            <p>Top curated products I have worked on</p>
        </div>
        <div className='works-container'>
            <ProjectCard />
        </div>
        
    </div>
  )
}

export default Works