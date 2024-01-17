import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState(''); // Define full_name and its setter
  const [phoneNo, setPhoneNo] = useState(''); // Define phoneNo and its setter
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email,
        password,
        full_name, // Include full_name in the request
        phoneNo, // Include phoneNo in the request
      });

      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Redirect to protected route
    } catch (error) {
      console.error(error);
      // Handle registration errors (display error messages)
    }
  };

  return (
    <>
      <h1 className="head">Binge It!</h1>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text" // Use "text" type for full name
              id="fullName"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone No.:</label>
            <input
              type="text"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => {
                const inputPhone = e.target.value;
                if (inputPhone.length <= 10) {
                  setPhoneNo(inputPhone);
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}

export default Register;
