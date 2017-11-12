import { fork, call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
import { getMovieById, getMovieCastAndCrew } from '../services';
import { fetchMoviesByDirector } from './movieList';

const getDirectorFromCrew = (crew) => {
    let director = "";
    
    crew.every((man) => {
        director = man.job === "Director" ? man.name : "";
        
        if (director !== "") return;     
    });
    return director;
}

export function* watchFetchMovieById() {
    yield takeEvery(types.START_FETCHING_MOVIE_BY_ID, fetchMovieById);
}

export function* fetchMovieById(action) {
    try {
        const response = yield call(getMovieById, action.payload);
        yield put({ type: types.FETCH_MOVIE_BY_ID_SUCCESS, payload: response.data });
    } catch(error) {
        yield put({ type: types.FETCH_MOVIE_BY_ID_FAILURE, payload: error })
    }
}

export function* watchFetchMovieCastAndCrew() {
    yield takeEvery(types.START_FETCHING_MOVIE_CAST_AND_CREW, fetchMovieCastAndCrew);
}

export function* fetchMovieCastAndCrew(action) {
    try {
        const response = yield call(getMovieCastAndCrew, action.payload);
        yield put({ type: types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS, payload: response.data });
        const director = getDirectorFromCrew(response.data.crew);
        yield fork(fetchMoviesByDirector, director);
    } catch(error) {
        yield put({ type: types.FETCH_MOVIE_CAST_AND_CREW_FAILURE, payload: error })
    }
}

// export const fetchMovieCastAndCrew = (id) => (
//     (dispatch) => {
//         dispatch(startFetchingMovieCastAndCrew());
//         return (getMovieCastAndCrew(id)
//             .then(response => {
//                 dispatch(fetchMovieCastAndCrewSuccess(response.data));

//                 const director = getDirectorFromCrew(response.data.crew);
//                 dispatch(fetchMovies(director, "director"));
//             })
//             .catch(error => {
//                 dispatch(fetchMovieCastAndCrewFailure(error.response.data));
//             })
//         )
//     });

