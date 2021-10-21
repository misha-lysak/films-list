import axios from 'axios';

const API_KEY = '55603383b6e7d248eaf4b2df9f74c6ec';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRES_URL = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const MOVIE_URL = `/discover/movie?api_key=${API_KEY}&language=en-US`;

const http = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

const getGenres = async (url: string, setState: (re: any) => void) => {
  return http.get(`${GENRES_URL}${url}`).then((response: any) => {
    setState(response.data.genres);
  });
};

const getFilms = (url: string, setState: (re: any) => void) => {
  return http.get(`${MOVIE_URL}${url}`).then((response) => {
    setState(response.data);
  });
};

export { getFilms, getGenres };
