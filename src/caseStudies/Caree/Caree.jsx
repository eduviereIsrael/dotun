import React from 'react';
import './Caree.css';
import { useStateContext } from '../../StateContext';
import { images } from '../../constants/images';
import { DivCarousel, Text } from '../../components';

const Caree = () => {

  const project = useStateContext();

  const caree = {...project[1]}

  const {careeHomepage,careeInfoscreen} = images;


  const {
    name, 
    intro, 
    bgColor, 
    introMockups, 
    introduction, 
    problemDef,} = caree
  return (
    <div className='project_container'>
      <div className='banner' style={{background: bgColor}}>
        <div className='banner-intro'>
          <h1> 
            {name}
          </h1>
          <p>{intro}</p>
        </div>
        <div>
          <img src={careeHomepage} alt={`${name} banner-img`} className='banner-img1' />
          <img src={careeInfoscreen} alt={`${name} banner-img`} className='banner-img2' />
        </div>
      </div>
      <DivCarousel>
        {introMockups.map((item, i) => (
          <div key = {i}>{item}</div>
          ))}
      </DivCarousel>
      <div className='case-study-cont'>
        <Text header='Introduction' text={introduction} class='introduction' />
        <Text header='Problem Definition' text={problemDef} class='problem-def' />
        
      </div>
    </div>
  )
}

export default Caree