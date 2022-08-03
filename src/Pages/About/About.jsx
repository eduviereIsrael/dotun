import React from 'react';
import './about.css';
import { images } from '../../constants/images';
import { Text } from '../../components'
import AnimatePage from '../../AnimatePage';

const About = () => {

  const {dotun} = images;
  const skills = ['Figma', 'Framer', 'Framer', 'Whimsical', 'Zeplin', 'Clickup', 'Slack', 'Photoshop', 'Adobe Ilustrator.']


  return (
    <AnimatePage>
      <div className='project_container about'>
        <div className='pers-intro'>
          <img src={dotun} alt='Adedotun.png' />
          <div className='pers-introduction'>
            <h2 className='gradient hey-there'>Hey There</h2>
            <span className='display-one'>I'm Adedotun Ayodimeji</span>
            <p>
              A product designer based in North London, United Kingdom.
              For the past few years, I’ve played a key role in designing for several industries like FinTech, MedTech, EduTech, and E-commerce. I tend to lean into projects that necessitate a high degree of vision, problem-solving and visual standard that put real people at the center of the development process.
            </p>
          </div>
        </div>
        <div className='pers-details'>
          <div className='exp'>
            <Text header='Experience' text='' class='exp' />
            <p className='exp-head'>
              <span className='heading'>BuildQL</span> ( EduTech) <br/> Co-founder and Product design mentor <br/>
              October 2021 - Present <br/>
              Nigeria.
            </p>
            <div className='list'>
              <ul>
                <li>
                  <p>
                    Helps teenagers to discover different role in technology and benefit to society.
                  </p>
                </li>
                <li>
                  <p>
                    Championed our first successful live boot-camp to train over 50 teenagers in product design, web development and graphics design.
                  </p>
                </li>
                <li>
                  <p>
                    Introduce and mentored 20 teenagers on user experiences and user interface design using figma.
                  </p>
                </li>
                <li>
                  <p>
                  Championed partnership investement with several brands in Nigeria.
                  </p>
                </li>
              </ul>
            </div>

            <p className='exp-head'>
              <span className='heading'>Byte</span> (fintech , Available on IOS and Andriod ) <br/>
              Design Lead<br/>
              December 2021 - July 2022<br/>
              Remote.
            </p>
            <div className='list'>
              <ul>
                <li>
                  <p>
                    Played a key role in evolving and shipping byte 2.0 which include design brainstorming, sketches and wireframing, Low design and design decision.
                  </p>
                </li>
                <li>
                  <p>
                    Key contributors to byte2.0 rebranding which includes colour, font and logo.
                  </p>
                </li>
                <li>
                  <p>
                  Worked alongside the UI designer and project manager to archieve our product, brand and design goal.
                  </p>
                </li>
              
              </ul>
            </div>

            <p className='exp-head'>
              Product Designer <br/>
              May 2021 - July 2022 <br/>
              Lagos, Nigeria. <br/>
            </p>

            <div className='list'>
              <ul>
                <li>
                  <p>
                    Spearhead the byte 1.0, from brainstorming, user experience and user interface design for mobile application 

                  </p>
                </li>
                <li>
                  <p>
                    User experince and user interface design for byte landing page, web and mobile.
                  </p>
                </li>
              </ul>
            </div>


            <p className='exp-head'>
              <span className='heading'>ZapmedX</span> (Medtech) <br/>
              User Interface designer<br/>
              January 2021 - May 2021<br/>
              Nigeria.
            </p>
            <div className='list'>
              <ul>
                <li>
                  <p>
                    Worked with the project manager and founder to transform the already designed wireframes into User   interface design
                  </p>
                </li>
                <li>
                  <p>
                    I worked with the developer for proper design handover and figma guidance .
                  </p>
                </li>
              </ul>
            </div>


            <p className='exp-head'>
              <span className='heading'>Freelance</span><br/>
              Graphics Designer and User Interface designer<br/>
              November 2019 - January 2021<br/>
              Nigeria.
            </p>
            <div className='list'>
              <ul>
                <li>
                  <p>
                    Worked with several brands and SMes in Nigeria to provides different design solutions ranging from brand    Identities, prints and UI designs.
                  </p>
                </li>
                <li>
                  <p>
                    Organizations includes Amirecamo, Bet9ja Sokoto, Bolex Stitches and more. 
                  </p>
                </li>
                <li>
                  <p>
                    Worked with e-commerce startup like Kegomall and Thrindle as a UI designer and Consultant. 
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='edu'>
            <Text header='Education' class='education' />
            <p className='exp-head'>
              <span className='heading'>Bachelor of Science</span><br/>
              Information Technology and Business<br/>
              information system.<br/>
              Middlesex University, Hendon, London<br/>
              2022
            </p>

            <p className='exp-head'>
              <span className='heading'>Coursera</span><br/>
              UX Design Professional Certificate<br/>
              Google<br/>
              2021.
            </p>

            <p className='exp-head'>
              <span className='heading'>Higher National Diploma</span><br/>
              Electrical Electronics Engineering<br/>
              The polytechnic Ibadan, Nigeria.<br/>
              2018.
            </p>
          </div>
          <Text header='Tools' class='tools-div' />
          <div className='list'>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}><p>{skill}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatePage>
    
  )
}

export default About