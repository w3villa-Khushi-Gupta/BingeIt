import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import '../assets/stylesheets/MoviePage.css'
import axios from 'axios'

function MoviePage(props) {
    const [movie, setMovie] = useState(null);
    const { imdbID } = useParams();

    useEffect(() => {
        const searchMovies = async () => {
            const API_URL = 'https://www.omdbapi.com';
        
            try {
              const response = await axios.get(API_URL, {
                params: {
                  apikey: props.apiKey,
                  i: imdbID,
                },
              });
              setMovie(response.data );
            } catch (error) {
              console.error('Error fetching movies:', error);
            }
          };
          searchMovies();
            }, [imdbID]);



    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <>

            <div className='container'>
                <div className="movie-page">
                <Header searchMovies={props.searchMovies} />

                    <img src={movie.Poster} alt={movie.Title} />
                    <h1>{movie.Title}</h1>
                    <p>Year: <span>{movie.Year}</span></p>
                    <p>Rated: <span>{movie.Rated}</span></p>
                    <p>Released: <span>{movie.Released}</span></p>
                    <p>Runtime: <span>{movie.Runtime}</span></p>
                    <p>Genre: <span>{movie.Genre}</span></p>
                    <p>Director: <span>{movie.Director}</span></p>
                    <p>Writer: <span>{movie.Writer}</span></p>
                    <p>Actors: <span>{movie.Actors}</span></p>
                    <p>Plot:  <span>{movie.Plot}</span></p>
                    <p>Language: <span>{movie.Language}</span></p>

                </div>

                {/* Add more details as needed */}
            </div>
        </>
    );
}

export default MoviePage;
