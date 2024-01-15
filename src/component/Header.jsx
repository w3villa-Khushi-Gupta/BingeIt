import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/stylesheets/Header.css';

function Header({ searchMovies }) {
    const [searchTerm, setSearchTerm] = useState('');
    // const navigate = useNavigate();


    const handleSearch = () => {
        searchMovies(searchTerm);
        // navigate('/');
    };

    return (
        <div className='header'>
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
