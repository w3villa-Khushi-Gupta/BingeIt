import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });

            localStorage.setItem('token', response.data.token);
            navigate('/protected-route'); // Redirect to protected route
        } catch (error) {
            console.error(error);
            // Handle login errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label
                    htmlFor="email">Email:</label>
                <input

                    type="email"

                    id="email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)} required />
            </div>


            <div>


                <label

                    htmlFor="password">Password:</label>


                <input

                    type="password"

                    id="password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)} required />
            </div>


            <button

                type="submit">Login</button>


        </form>
    );
}


export default Login;