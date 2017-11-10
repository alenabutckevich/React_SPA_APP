import * as types from '../constants';
import { getMoviesByTitle, getDirectorIdByName, getMoviesByDirector } from '../services';

export const fetchMovies = (searchQuery, searchFilter) => (
    (dispatch) => {
        if (searchFilter === "director") {
            dispatch(fetchMovieByDirector(searchQuery));
        } else {
            dispatch(fetchMoviesByTitle(searchQuery));
        }
    }
);

export const fetchMoviesByTitle = (searchQuery) => (
    (dispatch) => {
        dispatch(startFetchingMoviesByTitle());
        return (getMoviesByTitle(searchQuery)
            .then(response => {
                dispatch(fetchMoviesByTitleSuccess(response.data.results));
            })
            .catch(error => {
                dispatch(fetchMoviesByTitleFailure(error.response.data));
            })
        )
    }
)

export const fetchMovieByDirector = (searchQuery) => (
    (dispatch) => {
        dispatch(startFetchingMoviesByDirector());
        return (getDirectorIdByName(searchQuery)
            .then(response => {
                const id = response.data.results[0].id;
                return getMoviesByDirector(id);
            })
            .then(response => {
                const movies = response.data.crew.filter((item) => (item.department === "Directing"));
                dispatch(fetchMoviesByDirectorSuccess(movies))
            })
            .catch(error => {
                dispatch(fetchMoviesByDirectorFailure(error));
            })
        )
    }
)

export const startFetchingMoviesByTitle = () => ({
    type: types.START_FETCHING_MOVIES_BY_TITLE
});

export const fetchMoviesByTitleSuccess = (movies) => ({
    type: types.FETCH_MOVIES_BY_TITLE_SUCCESS,
    payload: movies
});

export const fetchMoviesByTitleFailure = (error) => ({
    type: types.FETCH_MOVIES_BY_TITLE_FAILURE,
    payload: error
});

export const startFetchingMoviesByDirector = () => ({
    type: types.START_FETCHING_MOVIES_BY_DIRECTOR
});

export const fetchMoviesByDirectorSuccess = (movies) => ({
    type: types.FETCH_MOVIES_BY_DIRECTOR_SUCCESS,
    payload: movies
});

export const fetchMoviesByDirectorFailure = (error) => ({
    type: types.FETCH_MOVIES_BY_DIRECTOR_FAILURE,
    payload: error
});
