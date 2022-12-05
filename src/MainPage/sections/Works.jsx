import React from 'react';
// import { project } from '../../constants/project';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../StateContext';

const Works = () => {

  const { project } = useStateContext();

  const byte = {...project[0]}
  const byteOne = {...project[1]}
  const caree = {...project[2]}
  const zapmedx = {...project[3]}

  return (
    <div className='works' id='projects'>
        <div className='intro'>
            <h2 className='gradient'>Projects</h2>
            <p>Top curated products I have worked on</p>
        </div>
        <div className='works-container'>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{byte.name}</h3>
                  <p className='gradient small-text'>Roles: UI/UX Design,Interaction,Prototype</p>
                  <p className='small-text'>{byte.cardDesc}</p>
                  <Link to={byte.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={byte.img} alt={byte.name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{byteOne.name}</h3>
                  <p className='gradient small-text'>Roles: Design lead,User flow,IA,Wireframes,Prototype</p>
                  <p className='small-text'>{byteOne.cardDesc}</p>
                  <span to={byteOne.linkUrl} className='primary-btn red'>Soon</span>
              </div>
              <div className='card-img'>
                <img src={byteOne.img} alt={byteOne.name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{caree.name}</h3>
                  <p className='gradient small-text'>Roles: UI/UX Design,Interaction,Prototype</p>

                  <p className='small-text'>{caree.cardDesc}</p>
                  <Link to={caree.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={caree.img} alt={caree.name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{zapmedx.name}</h3>
                  <p className='gradient small-text'>Roles: UI Design,Prototype</p>
                  <p className='small-text'>{zapmedx.cardDesc}</p>
                  <Link to={zapmedx.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={zapmedx.cardImg} alt={zapmedx.name} />
              </div>
            </div>
            
            
            {/* <ProjectCard /> */}
        </div>
        
    </div>
  )
}

export default Works