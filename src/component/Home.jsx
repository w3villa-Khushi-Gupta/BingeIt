import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
import '../assets/stylesheets/Home.css';
import { Link } from 'react-router-dom';

function Home(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = props.movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='home'>
      <Header searchMovies={props.searchMovies} />

      {currentMovies.length > 0 ? (
        <div className='container'>
          {currentMovies.map((movie) => (
            <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}

      <div className="pagination">
        {Array.from({ length: Math.ceil(props.movies.length / moviesPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
