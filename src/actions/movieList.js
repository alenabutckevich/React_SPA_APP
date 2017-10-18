import { START_FETCHING_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants';
import { getMoviesBySearchQuery } from '../services';

export const fetchMovies = (searchQuery) => (
    (dispatch) => {
        dispatch(startFetchingMovies());
        return (getMoviesBySearchQuery(searchQuery)
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
