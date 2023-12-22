import React, { useState } from 'react';
import img1 from './images/img1.png';
import axios from 'axios'
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    if (!name || !email || !mobile || !password) {
        alert('Provide each information to register');
        return;
      }
  
    if (!isChecked) {
      alert('Check terms and conditions');
      return;
    }

    setName('')
    setEmail('')
    setMobile('')
    setPassword('')
  
    try {
      const response = await axios.post('http://localhost:3000/register', {
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
  };
  

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <h3>Your personal job finder is here</h3>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <br />
        <input
          placeholder="Mobile"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          name="mobile"
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        <div className="checkbox">
          <input type="checkbox" 
            value={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
           />By creating an account, I agree to our terms of use and privacy policy
        </div>
        <button type="submit">Create Account</button>
        <div className="login">
          <h4>Already have an account?</h4>
          <h4>
            <a href="#">Sign In</a>
          </h4>
        </div>
      </form>
      <img src={img1} alt="img1" />
      <ToastContainer position='top-center' />
    </div>
  );
}
