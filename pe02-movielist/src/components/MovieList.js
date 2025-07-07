// src/components/MovieList.js
import React, { useState } from 'react';

const movies = [
  { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
  { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  { title: 'Finding Nemo', genre: 'Animation', releaseYear: 2003 },
  { title: 'Parasite', genre: 'Thriller', releaseYear: 2019 },
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  
  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const handleClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        {uniqueGenres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleClick(movie.title)}>
            <strong>{movie.title}</strong> ({movie.genre}, {movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;