import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import MoviePage from './component/MoviePage';
import Header from './component/Header';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const API_URL = 'https://www.omdbapi.com?apikey=849b2afd';
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };
  useEffect(() => {
    searchMovies('new')
  }, []);

  return (
    <div className="App">
      <Header searchMovies={searchMovies} />

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home movies={movies} />} />
          <Route path="/movies/:imdbID" element={<MoviePage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
