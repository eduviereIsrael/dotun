import React from 'react';
// import { project } from '../../constants/project';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../StateContext';

const Works = () => {

  const project = useStateContext();

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
                  <h3 className='gradient'>{byte.name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>{byte.cardDesc}</p>
                  <Link to={byte.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={byte.img} alt={byte.name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{byteOne.name}(Design lead, User flow, Flow chat, IA, Wireframes, Prototype, handover)</h3>
                  <p className='small-text'>{byteOne.cardDesc}</p>
                  <span to={byteOne.linkUrl} className='primary-btn'>View</span>
              </div>
              <div className='card-img'>
                <img src={byteOne.img} alt={byteOne.name} />
              </div>
              <span className='status'>soon</span>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{caree.name}(UI/UX Design, Interaction, Prototype)</h3>
                  <p className='small-text'>{caree.cardDesc}</p>
                  <Link to={caree.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={caree.img} alt={caree.name} />
              </div>
            </div>
            <div className='card'>
              <div className='card-intro'>
                  <h3 className='gradient'>{zapmedx.name}(UI Design, Prototype)</h3>
                  <p className='small-text'>{zapmedx.cardDesc}</p>
                  <Link to={zapmedx.linkUrl} className='primary-btn'>View</Link>
              </div>
              <div className='card-img'>
                <img src={zapmedx.img} alt={zapmedx.name} />
              </div>
            </div>
            
            
            {/* <ProjectCard /> */}
        </div>
        
    </div>
  )
}

export default Works