import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './component/MoviePage';
import Login from './component/login-signup/Login';
import Register from './component/login-signup/Register';
import ProtectedRoute from './component/ProtectedRoute';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([]);
  const apiKey= process.env.REACT_APP_OMDB_API_KEY

  const searchMovies = async (title) => {
    const API_URL = 'https://www.omdbapi.com';

    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: apiKey,
          s: title,
        },
      });
      console.log(response.data)
      const sortedMovies = response.data.Search.sort((a, b) => {
        const yearA = a.Year.split('–')[0]; 
        const yearB = b.Year.split('–')[0]; 

        const dateA = new Date(yearA);
        const dateB = new Date(yearB);
        return dateB - dateA;
      });

      setMovies(sortedMovies || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    const initialTitle = localStorage.getItem('searchTerm') || 'new';

    searchMovies(initialTitle);
  }, []);

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Routes>
          <Route element={<ProtectedRoute />}>

            <Route path='/home' element={<Home movies={movies} searchMovies={searchMovies} apiKey={apiKey}/>} />
            <Route path="/movies/:imdbID" element={<MoviePage searchMovies={searchMovies} apiKey={apiKey}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
