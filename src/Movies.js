import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/?s=batman&apikey=14c2ba68');
        if (response.data.Response === 'True') {
          setMovies(response.data.Search);
        } else {
          setError(response.data.Error);
        }
      } catch (error) {
        setError('Error fetching movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className='movies-heading'>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h6><Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link></h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
