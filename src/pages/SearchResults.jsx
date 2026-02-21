import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieWithType } from '../api/api';
import { useNavigate } from 'react-router-dom';


function SearchResults() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) return;
            const res = await searchMovieWithType(query, 'movie');
            setMovies(res?.Search || []);
        };

        fetchResults();
    }, [query]);

    const handleCardClick = (imdbID) => {
        navigate(`/movie/${imdbID}`);
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Search Results for "{query}"</h2>
            <div className="row">
                {movies.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    movies.map((movie) => (
                        <div className="col-md-3 mb-4" key={movie.imdbID}>
                            <div className="card h-100" onClick={() => handleCardClick(movie.imdbID)}>
                                <img
                                    src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'}
                                    className="card-img-top"
                                    alt={movie.Title}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SearchResults;
