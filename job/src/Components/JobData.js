import React from 'react'
import group from './images/group.png'
import indiaFlag from './images/indiaFlag.png'
import './JobData.css'

export default function JobData({ companyName, jobType, salary, location, officeType, jobPosition, skills,companyLogo}) {

  return (
    <>
      <div className='jobContainer'>
        <div className='leftParent'>
        <img id='companyLogo' src={companyLogo} alt='companyLogo' />
        <div className='leftSide'>
          <h2 style={{marginLeft:'10px'}}>{companyName}</h2>
          <h4 style={{marginLeft:'10px'}}>{jobType}</h4>
          <div className='imgGroup'>
            <div className='emp'>
              <img src={group} alt='group.png' />
              <p>11-50</p>
            </div>
            <div className='emp'>
              <img style={{ height: '22px', width: '32px' }} src={indiaFlag} alt='indiaFlag' />
              <p>{location}</p>
            </div>
            <div className='emp'>
            <p><span>Salary</span> ₹{salary}</p>
            </div>
          </div>
          <div className='btm'>
            <p>{officeType}</p>
            <p>{jobPosition} Position</p>
          </div>
        </div>
        </div>

        <div className='rightSide'>
          <div className='skillBox'>
            {skills.map((skill,index) => (
              <div key={index} className='skills'>{skill}</div>
            ))}
          </div>
          <button>View details</button>
        </div>

      </div>

    </>
  )
}

