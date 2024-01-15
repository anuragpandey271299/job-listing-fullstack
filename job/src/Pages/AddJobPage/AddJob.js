import React, {useState} from 'react';
import './AddJob.css'
import img2 from '../../Components/images/img2.png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function AddJob() {

    const [companyName, setCompanyName]=useState('')
    const [companyLogo, setCompanyLogo]=useState('')
    const [jobPosition, setJobPosition]=useState('')
    const [salary, setSalary]=useState('')
    const [jobType, setJobType]=useState('')
    const [officeType, setOfficeType]=useState('')
    const [location, setLocation]=useState('')
    const [jobDescription, setJobDescription]=useState('')
    const [aboutCompany, setAboutCompany]=useState('')
    const [skills, setSkills]=useState('')
    const [info, setInfo]=useState('')

    const navigate=useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(!companyName||!companyLogo||!jobPosition||!salary||!jobType||!officeType||!location||!jobDescription||!aboutCompany||!skills||!info){
            alert('Provide all the fields')
        }
        try{
            const jwtoken = localStorage.getItem('jwtoken');
            
            const config = {
              headers: {
                'Authorization': jwtoken,
                'Content-Type': 'application/json',
              },
            };
            const response = await axios.post('http://localhost:5000/addjob',{companyName,companyLogo,jobPosition,salary,jobType,officeType,location,jobDescription,aboutCompany,skills,info},config)
            console.log(response.data)
            if(response.status===200){
                toast('Job posted')
                navigate('/jobfinder')
            }
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='AddJobContainer'>
    <form onSubmit={handleSubmit}>
        <h1>Add Job Description</h1>
      <div className="form-group">
        <label>Company Name</label>
        <input value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Enter your company name here" />
      </div>

      <div className="form-group">
        <label>Add Logo URL</label>
        <input value={companyLogo} onChange={(e)=>setCompanyLogo(e.target.value)} placeholder="Enter the link" />
      </div>

      <div className="form-group">
        <label>Job position</label>
        <select value={jobPosition} onChange={(e)=>setJobPosition(e.target.value)}>
          <option value="">Select</option>
          <option value="Senior">Senior</option>
          <option value="Junior">Junior</option>
        </select>
      </div>

      <div className="form-group">
        <label>Monthly salary</label>
        <input value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Enter Amount in rupees" />
      </div>

      <div className="form-group">
        <label>Job Type</label>
        <select value={jobType} onChange={(e)=>setJobType(e.target.value)}>
          <option value="">Select</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Remote/office</label>
        <select value={officeType} onChange={(e)=>setOfficeType(e.target.value)} >
          <option value="">Select</option>
          <option value="Remote">Remote</option>
          <option value="Office">Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        </div>

        <div className="form-group">
            <label>Location</label>
            <input value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter location" />
        </div>

        <div className="form-group">
            <label>Job Description</label>
            <textarea value={jobDescription} onChange={(e)=>setJobDescription(e.target.value)} placeholder="Type the job description" />
        </div>

        <div className="form-group">
            <label>About Company</label>
            <textarea value={aboutCompany} onChange={(e)=>setAboutCompany(e.target.value)} placeholder="Type about your company" />
        </div>

        <div className="form-group">
            <label>Skills required</label>
            <input value={skills} onChange={(e)=>setSkills(e.target.value)} placeholder="Enter the must have skills" />
        </div>

        <div className="form-group">
            <label>Information</label>
            <input value={info} onChange={(e)=>setInfo(e.target.value)} placeholder="Enter the additional information" />
        </div>
        <button type="submit">+ Add Job</button>
    </form>
    <ToastContainer position='top-center' />
    <img src={img2} alt='img2' />
    </div>
  );
}


