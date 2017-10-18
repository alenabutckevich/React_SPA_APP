import * as types from '../constants';
import { getMovieById, getMovieCastAndCrew } from '../services';

export const fetchMovieById = (id) => (
    (dispatch) => {
        dispatch(startFetchingMovieById());
        return (getMovieById(id)
            .then(response => {
                dispatch(fetchMovieByIdSuccess(response.data));

            })
            .catch(error => {
                dispatch(fetchMovieByIdFailure(error));
            })
        )
    });

export const startFetchingMovieById = () => ({
    type: types.START_FETCHING_MOVIE_BY_ID
});

export const fetchMovieByIdSuccess = (movie) => ({
    type: types.FETCH_MOVIE_BY_ID_SUCCESS,
    payload: movie
});

export const fetchMovieByIdFailure = (error) => ({
    type: types.FETCH_MOVIE_BY_ID_FAILURE,
    payload: error
});

export const fetchMovieCastAndCrew = (id) => (
    (dispatch) => {
        dispatch(startFetchingMovieCastAndCrew());
        return (getMovieCastAndCrew(id)
            .then(response => {
                dispatch(fetchMovieCastAndCrewSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchMovieCastAndCrewFailure(error));
            })
        )
    });

export const startFetchingMovieCastAndCrew = () => ({
    type: types.START_FETCHING_MOVIE_CAST_AND_CREW
});

export const fetchMovieCastAndCrewSuccess = (people) => ({
    type: types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS,
    payload: people
});

export const fetchMovieCastAndCrewFailure = (error) => ({
    type: types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS,
    payload: error
});

export const resetCurrentMovie = () => ({
    type: types.RESET_CURRENT_MOVIE
});

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});
