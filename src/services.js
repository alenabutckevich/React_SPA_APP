import Axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '075cd6ced4baf51f5a02259700965b5d';

export const getMoviesBySearchQuery = (searchQuery) => 
    Axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=` + searchQuery)

export const getGenries = () =>
    Axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
