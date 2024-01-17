import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);

            navigate('/home');
        } catch (error) {
            if (error.response) {
                // Server responded with a non-2xx status code
                setError(error.response.data.error);
            } else if (error.request) {
                // The request was made but no response was received
                setError('Network error. Please try again.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };
    const handleSignUpClick = () => {
        navigate('/register');
      };


    // THERE IS NO OPTION FOR RETRIEVING THE USER USING TOKEN IN REQRES


// const token = localStorage.getItem('token')
//     axios.get('https://reqres.in/api/user', {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     })
//         .then((response) => {
//             const username = response.data.username;
//             console.log(response)
//             console.log('hi')

//             // Update the UI to display the username in the navbar
//         })
//         .catch((error) => {
//             // Handle error
//             console.log(error)

//         });

    return (
        <>
            <h1 className="head">Binge It!</h1>
            {error && <p className="error-message">{error}</p>}

            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3>Login</h3>
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
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className='sign-up-message' onClick={handleSignUpClick}>
                Didn't have an account?  <span className="hover-anchor">SignUp</span>
            </div>
        </>
    );
}

export default Login;
