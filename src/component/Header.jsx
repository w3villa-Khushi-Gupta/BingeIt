import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/stylesheets/Header.css';

function Header({ searchMovies }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        localStorage.setItem('searchTerm', searchTerm);
        searchMovies(searchTerm);
        navigate('/home');
    };
    const user = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.clear();
        // Redirect the user to the login page
        navigate('/');
    };



    return (
        <div className='header'>
            <div className='navbar'>
                <div className='logo'>
                    B!
                </div>
                <div className='user-info'>
                    <div >{user}</div>
                    <button className="logout" onClick={handleLogout}> Logout</button>
                </div>
            </div>
            <h1>Binge It!</h1>
            <div className='search'>
                <input
                    placeholder="Search Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default Header;
