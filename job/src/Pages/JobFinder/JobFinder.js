import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import JobData from '../../Components/JobData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobFinder() {
  const [name, setName] = useState('');
  const [jobData, setJobData] = useState([]);

  const fetchUserData = async () => {
    try {
      const jwtoken = localStorage.getItem('jwtoken');
      const config = {
        headers: {
          'Authorization': jwtoken,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get('http://localhost:5000/mydata', config);
      console.log(response.data);
      setName(response.data.name);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchJobData = async () => {
    try {
      const jwtoken = localStorage.getItem('jwtoken');
      const config = {
        headers: {
          'Authorization': jwtoken,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get('http://localhost:5000/myjob', config);
      setJobData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteJob=async(USERID)=>{
    const jwtoken = localStorage.getItem('jwtoken');
      const config = {
        headers: {
          'Authorization': jwtoken,
          'Content-Type': 'application/json',
        },
      };
      await axios.delete(`http://localhost:5000/delete/${USERID}`, config);
      fetchJobData()
      toast('Job deleted')
  }

  useEffect(() => {
    fetchUserData();
    fetchJobData();
  }, []);

  return (
    <>
      <Header name={name} />
      {jobData.map((job, index) => (
        <JobData
          key={index}
          companyName={job.companyName}
          jobType={job.jobType}
          salary={job.salary}
          location={job.location}
          officeType={job.officeType}
          jobPosition={job.jobPosition}
          skills={job.skills.flat()[0].split(',').map(skill => skill.trim())}
          companyLogo={job.companyLogo}
          USERID={job._id}
          onDelete={deleteJob}
        />
      ))}
      <ToastContainer position='top-center' />
    </>
  );
}

export default JobFinder;
