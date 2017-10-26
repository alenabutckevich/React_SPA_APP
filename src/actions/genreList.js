import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../constants';
import { getGenries } from '../services';

export const fetchGenres = () => (
    (dispatch) => {
        dispatch(startFetchingGenres());
        return (
            getGenries()
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
