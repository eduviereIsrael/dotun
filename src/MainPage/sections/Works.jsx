import React from 'react';
import { project } from '../../constants/project';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div className='works' id='projects'>
        <div className='intro'>
            <h2 className='gradient'>Projects</h2>
            <p>Top curated products I have worked on</p>
        </div>
        <div className='works-container'>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{project[0].name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>short description</p>
                  <Link to={project[0].linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={project[0].img} alt={project[0].name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{project[1].name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>short description</p>
                  <Link to={project[1].linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={project[1].img} alt={project[1].name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{project[1].name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>short description</p>
                  <Link to={project[1].linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={project[1].img} alt={project[1].name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{project[1].name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>short description</p>
                  <Link to={project[1].linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={project[1].img} alt={project[1].name} />
              </div>
            </div>
            {/* <ProjectCard /> */}
        </div>
        
    </div>
  )
}

export default Works