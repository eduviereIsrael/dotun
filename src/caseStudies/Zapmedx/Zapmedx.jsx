import React from 'react';

import { zFinalDesign, images } from '../../constants/images';
import '../casestudies.css'
import './zapmedx.css';
import { useStateContext } from '../../StateContext';
import { Team, Text } from '../../components';
import AnimatePage from '../../AnimatePage';

const Zapmedx = () => {

  const project = useStateContext();
  const zapmedx = {...project[3]};
  const {
    name, 
    intro, 
    introLong, 
    bgColor, 
    img,
    introduction,
    problemDef,
    ideation,
    solution,
    finalDesign,
    team,
    year,
    tool} = zapmedx;

    // console.log(introMockups)


  return (
    <AnimatePage>
      <div className='project_container zapmedx-pc'>
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
            <p>UI Design, Prototype</p>
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
            <img src={img} alt={`${name} banner-img`} className='banner-img1' />
            <img src={img} alt={`${name} banner-img`} className='banner-img2' />
            </div>
        </div>
        <div className='case-study-cont zapmedx-csc'>
            <img src={img} alt='zapmedx-img' className='project-img'/>
            
            <Text header='Introduction' text={introduction} class='introduction'/>

            <p className='paragraph'>
                We aim to help eliminate stigmas and make it easier for people to access care and treatment for the conditions that impact their daily lives.
            </p>

            <p className='paragraph'>
                Currently Operating in Lagos, Nigeria. Our goal is to expand our reach beyond Nigeria to Africa, by providing people with accessible, convenient, and affordable healthcare services, where they can connect to pharmacies, lab tests, and doctors anywhere they are.
            </p>

            <Text header='Problem Definition' text={problemDef} class='problem-def'/>

            <Text header='Solution' text={solution} class='solution'/>

            <div className='list'>
                <ul>
                    <li>
                        <span>Pharmacy</span>
                        <p>
                            This feature allow users to order for medicine without hassle, I integrated simple e-commerce flow for easy 
                            customer checkout.
                        </p>
                    </li>
                    <li>
                        <span>Diagnosis</span>
                        <p>
                            This is where users can book for online test and get result while at home. It is simple, when user logged in and
                            browse different type of test available, user make payment and our expert visit to take blood sample and also
                            return with test result under 24hours
                        </p>
                    </li>
                    <li>
                        <span>Consult</span>
                        <p>
                            Users can get to meet online doctors for consultation 
                        </p>
                    </li>
                </ul>
            </div>

            <Text header='Ideation' text={ideation} class='ideation'/>

            <Text header='Final Design' text={finalDesign} class='final-design'/>

            {zFinalDesign.map((img, i) => (
                <img src={img} key={i} alt={img} className='project-img' />
            ))}

            <Text header='Style Guide' class='final-esign'/>

            <img src={images.zStyleGuide} alt={images.zStyleGuide} className='project-img' />

            <Text header='Team Menbers' class='team-members'/>

            <Team team={team} />
            
        </div>
    </div>
    </AnimatePage>
    
  )
}

export default Zapmedx