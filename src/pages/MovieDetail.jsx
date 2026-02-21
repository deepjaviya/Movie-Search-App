import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCardDetail } from '../api/api';
import "../styles/MovieDetail.css";

import { useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {

  const navigate = useNavigate();

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getCardDetail(id);
      setMovie(data);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>No movie found.</p>;

  const AddWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];


    const isAlreadyAdded = watchlist.some(m => m.imdbID === movie.imdbID);

    if (!isAlreadyAdded) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }

    navigate('/watchlist');
  }

  return (
    <>
      <div className="card-detail">
        <div className="card mb-3" style={{ max_width: '100%', border: 'none' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={movie.Poster} style={{ width: '100%' }} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><strong>Title:</strong> {movie.Title}</h5>
                <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
                <p className="card-text"><strong>Genre:</strong> {movie.Genre}</p>
                <p className="card-text"><strong>Language:</strong> {movie.Language}</p>
                <p className="card-text"><strong>Released :</strong> {movie.Released}</p>
                <p className="card-text"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                <p className="card-text"><strong>Plot:</strong> {movie.Plot}</p>
                <p className="card-text"><strong>Director:</strong> {movie.Director}</p>
                <p className="card-text"><strong>Writer:</strong> {movie.Writer}</p>
                <p className="card-text"><strong>Actors:</strong> {movie.Actors}</p>
                <p className="card-text"><strong>Country:</strong> {movie.Country}</p>
              </div>
              <div className="btn">
                <button onClick={AddWatchlist}>Add Watchlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
