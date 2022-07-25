import React from 'react';
import { marquee } from '../../constants/images';

// const marqueeLoop = () => {
//     return (
        
//     )
// }

const Marquee = () => {
  return (
    <div className="marquee-section">
        <div className='marquee'>
            <div className='firstLoop loop'>
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
            </div>
        </div>
        <div className='second-marquee marquee'>
            <div className='firstLoop loop'>
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
                {marquee.map((item, i) => (
                    <div className='marquee-item'>
                    <div className='marquee-img'>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className='marquee-text'>{item.name}</div>
                </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Marquee