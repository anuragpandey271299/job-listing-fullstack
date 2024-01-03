import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import JobData from '../../Components/JobData'
import axios from 'axios'

function JobFinder() {
  const [name,setName]=useState('')
  const fetchData=async()=>{
    try{
      const jwtoken = localStorage.getItem('jwtoken')
        const config = {
          headers: {
            'Authorization': jwtoken,
            'Content-Type': 'application/json',
          },
        };
      const response = await axios.get('http://localhost:5000/mydata',config)
      console.log(response.data)
      setName(response.data.name)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <Header name={name} />
    <JobData />
    </>
  )
}

export default JobFinder