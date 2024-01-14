// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
// import Login from './component/login-signup/Login';
// import Register from './component/login-signup/Register';
// import ProtectedRoute from './component/ProtectedRoute';
// import Temp from './component/Temp';
// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route element = {<ProtectedRoute />}>
//               <Route path='/home' element = {<Home />} />
//               <Route path='/temp' element={<Temp /> } />

//             </Route>
//             <Route path='/login' element = {<Login />} />
//             <Route path='/register' element = {<Register />} />
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/login-signup/Login';
import Register from './component/login-signup/Register';
import ProtectedRoute from './component/ProtectedRoute';
import Temp from './component/Temp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Use ProtectedRoute as a wrapper for protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {/* Update the path to '/' for Home */}
                <Route path="/" element={<Home />} />
                <Route path="/temp" element={<Temp />} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
