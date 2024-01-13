import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/login-signup/Login';
import Register from './component/login-signup/Register';
import ProtectedRoute from './component/ProtectedRoute';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element = {<Login />} />
            <Route path='/register' element = {<Register />} />
            <Route element = {<ProtectedRoute />}>
              <Route path='/home' element = {<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
