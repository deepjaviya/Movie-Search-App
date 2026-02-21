const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMoviesWithType = async (query, type = 'movie') => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}`);
  const data = await response.json();
  return data.Search || [];
};

export const searchseriesWithType = async (query, type = 'series') => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}`);
  const data = await response.json();
  return data.Search || [];
};


export const getCardDetail = async (id) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();
  return data;
};

export const searchMovieWithType = async (title, type) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}&type=${type}`);
  const data = await res.json();
  return data;
};

export const searchMoviWithType = async (title, type) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}&type=${type}`);
  const data = await response.json();
  return data;
};

