import React from 'react';
import './team.css'

const Team = ({team}) => {
  return (
    <div className='team'>
        {team.map((member, i) => (
            <p key={i}>{member.name} - {member.role}</p>
        ))}
    </div>
  )
}

export default Team