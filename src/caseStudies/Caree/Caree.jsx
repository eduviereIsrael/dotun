import React from 'react';
import './Caree.css';
import { useStateContext } from '../../StateContext';
import { images, careeLoFiSketch } from '../../constants/images';
import { DivCarousel, ImgCarousel, Text } from '../../components';

const Caree = () => {

  console.log(careeLoFiSketch)

  const project = useStateContext();

  const caree = {...project[1]}

  const {
    careeHomepage,
    careeInfoscreen,
    careeDD,
    careeCompAdv,
    reqSpecImg,
    cDesktopImg} = images;


  const {
    name, 
    intro, 
    bgColor, 
    introMockups, 
    introduction, 
    problemDef,
    solution,
    methodology,
    designProcess,
    reqSpec,
    sketches,
    wireframes,
    finalDesign,
    conclusion,
    finalDesignImg} = caree
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

        <Text header='Solution' text={solution} class='solution' />

        <Text header='Methodology' text={methodology} class='methodology' />

        <img src={careeDD} alt={careeDD} className='project-img caree-dd' />

        <p className='paragraph'>
          The Double Diamond Framework by the British Design Council permits me to settle on purposeful plan choices by investigating different choices (divergent thinking), while at the same time approving more grounded ones and removing the more vulnerable ones (convergent thinking). 
        </p>

        <div className='list'>
          <p>I utilize this equivalent way to  address two things:</p>
          <ol>
            <li><p>Is this the right issue to tackle?</p></li>
            <li><p>Is this the right solution to execute?</p></li>
          </ol>
        </div>

        <p className='paragraph'> The Process is intended to investigate every possibility to guarantee that the planned heading is bound to make the ideal effect</p>

        <p className='subhead'>THE DOUBLE DIAMOND DESIGN PROCESS INCLUDES</p>

        <p className='paragraph'><span className='bold-text'>{designProcess[0].step} </span>: {designProcess[0].text}</p>

        <p className='paragraph'><span className='bold-text'>{designProcess[1].step} </span>: {designProcess[1].text}</p>

        <img src={careeCompAdv} alt={careeCompAdv} className='project-img caree-comp-adv' />

        <p className='paragraph'><span className='bold-text'>{designProcess[2].step} </span>: {designProcess[2].text}</p>

        <Text header='Requirement Specification' text={reqSpec} className='req-spec-img' />

        <img src={reqSpecImg} alt='requirement specifications' className='project-img req-spec' />

        <Text header='Sketches / Lo-Fi Ideation' text={sketches} class='sketches'/>

      </div>

      

      <ImgCarousel carousel={careeLoFiSketch} width='350px' class='c-lofi-sketch' />
        
      <div className='case-study-cont'>
        <Text header='Wireframes' text={wireframes} class='wireframes' />

        <Text header='Final Design' text={finalDesign} class='final-design' />
      </div>

      <DivCarousel>
        {finalDesignImg.map((item, i) => (
          <div key = {i}>{item}</div>
          ))}
      </DivCarousel>

      <div className='case-study-cont'>
        <img src={cDesktopImg} alt={cDesktopImg} className="project-img caree-dashboard"/>

        <Text header='Conclusion and Further Work' text={conclusion} class='conclusion' />

      </div>
      
    </div>
  )
}

export default Caree