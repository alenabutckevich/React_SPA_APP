import Axios from 'axios';
import * as types from '../constants';

export const fetchGenres = () => (
    (dispatch) => (
        Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=075cd6ced4baf51f5a02259700965b5d&')
            .then(response => {
                dispatch(fetchGenresSuccess(response.data.genres));
            })
            .catch(error => {
                dispatch(fetchGenresFailure(error));
            })
    )
);

export const fetchGenresSuccess = (genres) => ({
    type: types.FETCH_GENRES_SUCCESS,
    payload: genres
});

export const fetchGenresFailure = (error) => ({
    type: types.FETCH_GENRES_FAILURE,
    payload: error
});