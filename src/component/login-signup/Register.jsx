// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://reqres.in/api/register', {
//         email,
//         password,
//       });

//       localStorage.setItem('token', response.data.token);
//       navigate('/protected-route'); // Redirect to protected route
//     } catch (error) {
//       console.error(error);
//       // Handle login errors
//     }
//   };
//   return(
//     <>
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <div>
//                 <label
//                     htmlFor="username">Username:</label>
//                 <input

//                     type="username"

//                     id="username"

//                     value={username}

//                     onChange={(e) => setUsername(e.target.value)} required />
//             </div>




//         </form>
//         </>)
// }

// export default Register


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Add state for username
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email,
        password,
        username, // Include username in request body
      });

      localStorage.setItem('token', response.data.token);
      navigate('/protected-route'); // Redirect to protected route
    } catch (error) {
      console.error(error);
      // Handle registration errors (display error messages)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text" // Use type="text" for username
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
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

export default Register;
