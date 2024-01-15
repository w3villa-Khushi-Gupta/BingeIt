import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
import '../assets/stylesheets/Home.css';
import { Link } from 'react-router-dom';
import MoviePage from './MoviePage';

function Home(props) {


  return (
    <div className='home'>
      {props.movies?.length > 0 ? (
        <div className='container'>
          {props.movies.map((movie) => (
            <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID} >
              <MovieCard movie={movie} />
            </Link>))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
