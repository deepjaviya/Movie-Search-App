import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import image_1 from "../assets/image/slider-image-3.jpg";
import image_2 from "../assets/image/slider-image-2.jpg";
import image_3 from "../assets/image/slider-image-1.jpg";
import image_4 from "../assets/image/slider-image-4.jpg";
import image_5 from "../assets/image/slider-image-5.jpg";
import { searchMoviesWithType } from '../api/api';
import MovieCard from '../components/MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {

  const [romanticMovies, setRomanticMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);


  useEffect(() => {
    const fetchPopularMovies = async () => {
      const romantic = await searchMoviesWithType('romantic', 'movie');
      setRomanticMovies(romantic || []);

      const action = await searchMoviesWithType('action', 'movie');
      setActionMovies(action || []);

      const horror = await searchMoviesWithType('horror', 'movie');
      setHorrorMovies(horror || []);

      const comedy = await searchMoviesWithType('comedy', 'movie');
      setComedyMovies(comedy || []);
    };

    fetchPopularMovies();
  }, []);


  const settings = {  
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };


  return (
    <>
      <section>
        <div className="slider-container">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image_1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image_2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image_3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image_4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image_5} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-section">
          <div className="movie-container">
            <div className="movie-type">
              <h1>Romantic Movies</h1>
            </div>
            <Slider {...settings}>
              {romanticMovies.length > 0 ? (
                romanticMovies.map((movie) => (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-section">
          <div className="movie-container">
            <div className="movie-type">
              <h1>Action Movies</h1>
            </div>
            <Slider {...settings}>
              {actionMovies.length > 0 ? (
                actionMovies.map((movie) => (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-section">
          <div className="movie-container">
            <div className="movie-type">
              <h1>Horror Movies</h1>
            </div>
            <Slider {...settings}>
              {horrorMovies.length > 0 ? (
                horrorMovies.map((movie) => (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-section">
          <div className="movie-container">
            <div className="movie-type">
              <h1>Comedy Movies</h1>
            </div>
            <Slider {...settings}>
              {comedyMovies.length > 0 ? (
                comedyMovies.map((movie) => (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Slider>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
