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
    introLong, 
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
    team,
    solution,
    tool,
    year} = byte;


  return (
    <div className='project_container byte-pc'>
      <div className='banner' style={{background: bgColor}}>
        <div className='banner-intro'>
          <h1> 
            {name}
          </h1>
          <p className='mobile-view'>{intro}</p>
          <p className='desktop-view dv-p'>{introLong}</p>
        <div className='line desktop-view'></div>
        <div className='banner-footer desktop-view'>
          <div className='role'>
            <p>My Role</p>
            <p>UI/UX Design, Prototyping, User Testing, Interaction Design</p>
          </div>
          <div className='year-tool'>
            <div className='tool'>
              <p>Tools</p>
              <p>{tool}</p>
            </div>
            <div className='year'>
              <p>Year</p>
              <p>{year}</p>
            </div>
          </div>
        </div>

        </div>
        <div>
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img1' />
          <img src={introMockups[0]} alt={`${name} banner-img`} className='banner-img2' />
        </div>
      </div>

      <ImgCarousel carousel={introMockups} width='240px' class='intromMockups'/>
      <div className='case-study-cont'>
            <Text header='Introduction' text={introduction} class='introduction'/>

            <Text header='Problem Definition' text={problemDef} class='problem-def'/>

            <div className='list questions'>
              <ul>
                {questions.map((question, i) => (
                  <li key={i} ><p className='italics'>{question}</p></li>
                ))}
              </ul>
            </div>

            <div className='list'>
              <h4>Before we answer those questions, we must understand the cause</h4>
              <ol>
                {causes.map((causes, i) => (
                  <li key={i} ><p>{causes}.</p></li>
                ))}
              </ol>
            </div>

            <Text header='Solution' text={solution} class='solution' />

            <div className='list'>
              <ol>
                <li><p>Reduce payment downtime, experince fast transfer time.</p></li>
                <li><p>Go beyond just payment with peers.</p></li>
                <li><p>Save money on transaction and monthly fees.</p></li>
              </ol>
            </div>

            <p className='paragraph'>To , archieve the above solution, We must do without Nigeria Inter-Bank settlement system for our peer payment.</p>

            <p className='paragraph'>How can we archive this?</p>

            <Text header='Ideation' text={ideation} class='ideation'/>

            <Text header='Competitive Advantage' text={compAdv} class='competitive-adv'/>

            <img src={compAnalysisImg} alt={compAnalysisImg} className='project-img competitor-analysis' />

            <Text header='Sketches/Lo-Fi Ideation' text={loFiSketches} class='loFiSketches'/>

            {/* <ImgCarousel carousel={introMockups} width='150px' class='intromMockups'/> */}

            
 
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