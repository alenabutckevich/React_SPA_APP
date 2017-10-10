import Axios from 'axios';
import * as types from '../constants';

export const fetchMovies = (searchQuery, searchFilter) => (
    (dispatch) => (
        Axios.get('https://netflixroulette.net/api/api.php?' + searchFilter + '=' + searchQuery.replace(/\s/ig, "%20"))
            .then(response => {
                const data = response.data.length ? response.data : [response.data];
                dispatch(fetchMoviesSuccess(data));
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

export const fetchMovieByTitle = (title) => (
    (dispatch) => (
        Axios.get('https://netflixroulette.net/api/api.php?title=' + title.replace(/\s/ig, "%20"))
            .then(response => {
                dispatch(fetchMovieByTitleSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchMovieByTitleFailure(error));
            })
    )
);

export const fetchMovieByTitleSuccess = (movie) => ({
    type: types.FETCH_MOVIE_BY_TITLE_SUCCESS,
    payload: movie
});

export const fetchMovieByTitleFailure = (error) => ({
    type: types.FETCH_MOVIE_BY_TITLE_FAILURE,
    payload: error
});

export const resetCurrentMovie = () => ({
    type: types.RESET_CURRENT_MOVIE
});

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});
