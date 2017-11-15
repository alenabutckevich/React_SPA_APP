import Axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '075cd6ced4baf51f5a02259700965b5d';

export const getMoviesByTitle = (searchQuery, searchFIlter) =>
    Axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=` + searchQuery);

export const getDirectorIdByName = (name) =>
    Axios.get(`${baseUrl}/search/person?api_key=${apiKey}&query=${name}`);

export const getMoviesByDirector = (id) =>
    Axios.get(`${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`);

export const getGenries = () =>
    Axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);

export const getMovieById = (id) =>
    Axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);

export const getMovieCastAndCrew = (id) =>
    Axios.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`);
