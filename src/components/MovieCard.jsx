import React from 'react';
import "../styles/MovieCard.css";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`); 
  };
  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
