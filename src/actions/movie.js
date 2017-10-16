import Axios from 'axios';
import * as types from '../constants';

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
