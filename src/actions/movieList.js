import Axios from 'axios';
import * as types from '../constants';

export const fetchMovies = (searchQuery) => (
    (dispatch) => (
        Axios.get('https://api.themoviedb.org/3/search/movie?api_key=075cd6ced4baf51f5a02259700965b5d&query=' + searchQuery)
            .then(response => {
                dispatch(fetchMoviesSuccess(response.data.results));
            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error));
            })
    )
);

export const fetchMoviesSuccess = (movies) => ({
    type: types.FETCH_MOVIES_SUCCESS,
    payload: movies
});

export const fetchMoviesFailure = (error) => ({
    type: types.FETCH_MOVIES_FAILURE,
    payload: error
});
