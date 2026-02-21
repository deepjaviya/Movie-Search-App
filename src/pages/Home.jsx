import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import image_1 from "../assets/image/slider-image-1.jpg";
import image_2 from "../assets/image/slider-image-7.jpg";
import image_3 from "../assets/image/slider-image-8.jpg";
import image_4 from "../assets/image/slider-image-4.jpg";
import image_5 from "../assets/image/slider-image-5.jpg";
import { searchMoviWithType } from '../api/api';
import MovieCard from '../components/MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const movieKeywords = ['avengers', 'batman', 'inception', 'matrix', 'spider', 'iron'];
  const seriesKeywords = ['stranger', 'friends', 'office', 'witcher', 'vikings', 'dark'];

  const getRandomKeyword = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getUniqueById = (items) => {
    const seen = new Set();
    return items.filter(item => {
      if (seen.has(item.imdbID)) return false;
      seen.add(item.imdbID);
      return true;
    });
  };

  useEffect(() => {
    const fetchRandomMovies = async () => {
      const keyword = getRandomKeyword(movieKeywords);
      const result = await searchMoviWithType(keyword, 'movie');
      setMovies(getUniqueById(result?.Search || []));
    };

    const fetchRandomSeries = async () => {
      const keyword = getRandomKeyword(seriesKeywords);
      const result = await searchMoviWithType(keyword, 'series');
      setSeries(getUniqueById(result?.Search || []));
    };

    fetchRandomMovies();
    fetchRandomSeries();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5 ,
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
                <img src={image_1} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={image_2} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={image_3} className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="carousel-item">
                <img src={image_4} className="d-block w-100" alt="Slide 4" />
              </div>
              <div className="carousel-item">
                <img src={image_5} className="d-block w-100" alt="Slide 5" />
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
              <h1> Popular Movies</h1>
            </div>
            <Slider {...settings}>
              {movies.length > 0 ? (
                movies.map(movie => (
                  <div key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </div>
                ))
              ) : <p>Loading movies...</p>}
            </Slider>
          </div>
        </div>
      </section>


      <section>
        <div className="movie-section">
          <div className="movie-container">
            <div className="movie-type">
              <h1>Popular Series</h1>
            </div>
            <Slider {...settings}>
              {series.length > 0 ? (
                series.map(item => (
                  <div key={item.imdbID}>
                    <MovieCard movie={item} />
                  </div>
                ))
              ) : <p>Loading series...</p>}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
