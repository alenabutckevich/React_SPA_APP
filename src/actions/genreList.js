import Axios from 'axios';
import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../constants';

export const fetchGenres = () => (
    (dispatch) => {
        dispatch(startFetchingGenres());
        return (
            Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=075cd6ced4baf51f5a02259700965b5d')
                .then(response => {
                    dispatch(fetchGenresSuccess(response.data.genres));
                })
                .catch(error => {
                    dispatch(fetchGenresFailure(error));
                })
        )
    }
);

export const startFetchingGenres = () => ({
    type: START_FETCHING_GENRES
});

export const fetchGenresSuccess = (genres) => ({
    type: FETCH_GENRES_SUCCESS,
    payload: genres
});

export const fetchGenresFailure = (error) => ({
    type: FETCH_GENRES_FAILURE,
    payload: error
});
