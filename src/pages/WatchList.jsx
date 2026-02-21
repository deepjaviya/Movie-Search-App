import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Watchlist.css';

const Watchlist = () => {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(stored);
  }, []);

  const handleCardClick = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  const handleRemove = (imdbID) => {
    const updated = watchlist.filter((movie) => movie.imdbID !== imdbID);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
  };

  return (
    <div className="container watchlist-container">
      <h2 className="mb-4 text-center fw-bold text-white">My Watchlist</h2>

      {watchlist.length === 0 ? (
        <div className="text-center text-muted ">
          <p className='text-white'>No movies added yet. Start exploring and build your collection!</p>
        </div>
      ) : (
        <div className="row g-4">
          {watchlist.map((movie) => (
            <div className="col-sm-6 col-lg-3" key={movie.imdbID}>
              <div className="card h-100 shadow-sm border-0 position-relative watchlist-card">
                <div
                  onClick={() => handleCardClick(movie.imdbID)}
                  className="watchlist-image-container"
                >
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="watchlist-image"
                  />
                </div>

                <div className="card-body bg-light text-center">
                  <h5 className="card-title text-truncate m-0">{movie.Title}</h5>
                  <p className="card-text fw-semibold mb-1">{movie.Year}</p>
                  <p className="card-text text-muted small mb-2">{movie.Type || 'Movie'}</p>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemove(movie.imdbID)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
