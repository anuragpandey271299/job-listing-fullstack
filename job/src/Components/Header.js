import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Header({name}) {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    toast('Logged out')
    navigate('/login')
  }
  return (
    <>
    <div className='headerContainer'>
        <h1>Job Finder</h1>
        <div className='groupInfo'>
            <button onClick={handleLogout}>Log out</button>
            <h3>Hello {name.toUpperCase()} ! </h3>
        </div>
    </div>
    </>
  )
}
