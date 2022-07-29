import React from 'react';
import '../casestudies.css'
import './Byte.css';
import { useStateContext } from '../../StateContext';
import { DivCarousel, ImgCarousel, Team, Text } from '../../components';



const Byte = () => {

  const project = useStateContext();
  const byte = {...project[0]}
  const {
    name, 
    intro, 
    bgColor, 
    introMockups, 
    introduction, 
    problemDef, 
    questions, 
    causes,
    ideation,
    compAdv,
    compAnalysisImg,
    loFiSketches,
    loFiSketchesImg,
    wireframeImg,
    wireframes,
    finalDesignImg,
    successMetrics,
    team} = byte;

    console.log(finalDesignImg)

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
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img1' />
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img2' />
        </div>
      </div>

      <ImgCarousel carousel={introMockups} width='150px' class='intromMockups'/>
      <div className='case-study-cont'>
        <div className='sec-theme'>
            <Text header='Introduction' text={introduction} class='introduction'/>

            <Text header='Problem Definition' text={problemDef} class='problem-def'/>

            <div className='list questions'>
              <ul>
                {questions.map((question, i) => (
                  <li key={i} >{question}</li>
                ))}
              </ul>
            </div>

            <div className='list'>
              <h4>Before we answer those questions, we must understand the cause</h4>
              <ol>
                {causes.map((causes, i) => (
                  <li key={i} >{causes}.</li>
                ))}
              </ol>
            </div>

            <Text header='Ideation' text={ideation} class='ideation'/>

            <Text header='Competitive Advantage' text={compAdv} class='competitive-adv'/>

            <img src={compAnalysisImg} alt={compAnalysisImg} className='project-img competitor-analysis' />

            <Text header='Sketches/Lo-Fi Ideation' text={loFiSketches} class='loFiSketches'/>

            {/* <ImgCarousel carousel={introMockups} width='150px' class='intromMockups'/> */}

            
 
        </div>
      </div>

      <ImgCarousel carousel={loFiSketchesImg} width='200px' class='byte-lo-fi-imgs' />

      <div className='case-study-cont'>

       <Text header='Wireframes' text={wireframes} class='wireframes' />

       <img src={wireframeImg} alt={wireframeImg} className='project-img wireframe-img' />

      </div>

      <DivCarousel>
        {finalDesignImg.map((item, i) => (
          <div key = {i}>{item}</div>
          ))}
      </DivCarousel>

      <div className='case-study-cont'>
        <Text header='Success Metric' text={successMetrics} class='success-metrics'/>
        <Text header='Team Members' class='team-members'/>
        <Team team={team}/>
      </div>
      
    </div>
  )
}

export default Byte