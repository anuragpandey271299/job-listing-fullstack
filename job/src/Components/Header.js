import React from 'react'
import './Header.css'

export default function Header({name}) {
  return (
    <>
    <div className='headerContainer'>
        <h1>Job Finder</h1>
        <div className='groupInfo'>
            <button>Log out</button>
            <h3>Hello {name} !! </h3>
        </div>
    </div>
    </>
  )
}
