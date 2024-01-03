import React, { useState } from 'react';
import axios from 'axios'
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import img1 from './images/img1.png'



export default function Register({forLogin}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked]=useState(false)

  const navigate=useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(forLogin && (!email || !password)){
      alert('Provide each information to login')
    }
      
    if (!forLogin && (!name || !email || !mobile || !password)) {
        alert('Provide each information to register');
        return;
      }
  
    if (!forLogin && !isChecked) {
      alert('Check terms and conditions');
      return;
    }

    setName('')
    setEmail('')
    setMobile('')
    setPassword('')
  
    if(!forLogin){
      try {
        const response = await axios.post('http://localhost:5000/register', {
          name,
          email,
          mobile,
          password,
        });
        console.log(response.data);
    
        if (response.status === 201) {
          console.log('User registered successfully');
          toast('User registered successfully')
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }else{
      try{
        if(!email||!password){
          return
        }
        const response = await axios.post('http://localhost:5000/login',{email,password})
        console.log(response.data);
        if(response.status===200){
          toast('Loggen in successfully')
          localStorage.setItem('jwtoken',response.data.jwtoken)
          navigate('/addjob')
        }
        if(response.status===401){
          alert('Unauthorized')
        }
        
      }catch(error){
        console.error('Error:', error);
      }
    }
    
  };

  

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        {!forLogin ? 
          (
            <h1>Create an account</h1>
          ):(
            <h1>Login your account</h1>
          )
        }

        <h3>Your personal job finder is here</h3>
        {!forLogin && 
          (
            <input
            className='inputs'
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          )        
        }

        <input
        className='inputs'
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        {!forLogin && 
          (
            <input
            className='inputs'
            placeholder="Mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            name="mobile"
          />
          )
        }

        <input className='inputs'
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />

        {!forLogin && 
          (
        <div className="checkbox">
          <input type="checkbox" 
            value={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
           />By creating an account, I agree to our terms of use and privacy policy
        </div>
          )
        }
        
        <button type="submit">
          {!forLogin?'Create Account':'Sign In'}
        </button>
        <div className="login">
          {!forLogin && (
            <>
              <h4>Already have an account?</h4>
              <h4><Link to="/login">Sign In</Link></h4>
            </>
          )}
          {forLogin && (
            <>
            <h4>Create account?</h4>
            <h4><Link to="/">Sign Up</Link></h4>
            </>
          )

          }

        </div>
      </form>
      <ToastContainer position='top-center' />
      <img src={img1} alt='img1' />
    </div>
  );
}
