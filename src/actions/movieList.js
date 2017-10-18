import Axios from 'axios';
import { START_FETCHING_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants';

export const fetchMovies = (searchQuery) => (
    (dispatch) => {
        dispatch(startFetchingMovies());
        return (Axios.get('https://api.themoviedb.org/3/search/movie?api_key=075cd6ced4baf51f5a02259700965b5d&query=' + searchQuery)
            .then(response => {
                dispatch(fetchMoviesSuccess(response.data.results));
            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error));
            })
    )}
);

export const startFetchingMovies = () => ({
    type: START_FETCHING_MOVIES
});

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
});

export const fetchMoviesFailure = (error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error
});
