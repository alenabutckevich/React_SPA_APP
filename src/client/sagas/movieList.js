import { fork, call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';
import { getMoviesByTitle, getDirectorIdByName, getMoviesByDirector } from '../services';

export function* watchFetchMovies() {
    yield takeEvery(types.START_FETCHING_MOVIES, fetchMovies);
}

export function* fetchMovies(action) {
    if (action.payload.filter === "title") {
        yield fork(fetchMoviesByTitle, action.payload.query);
    } else {
        yield fork(fetchMoviesByDirector, action.payload.query);
    }
}

export function* fetchMoviesByTitle(query) {
    try {
        const response = yield call(getMoviesByTitle, query);
        yield put({ type: types.FETCH_MOVIES_BY_TITLE_SUCCESS, payload: response.data.results });
    } catch (error) {
        yield put({ type: types.FETCH_MOVIES_BY_TITLE_FAILURE, payload: error });
    }
}

export function* fetchMoviesByDirector(query) {
    try {
        let response = yield call(getDirectorIdByName, query);
        const id = response.data.results[0].id;

        response = yield call(getMoviesByDirector, id);
        const movies = response.data.crew.filter((item) => (item.department === "Directing"));

        yield put({ type: types.FETCH_MOVIES_BY_DIRECTOR_SUCCESS, payload: movies });
    } catch (error) {
        yield put({ type: types.FETCH_MOVIES_BY_DIRECTOR_FAILURE, payload: error });
    }
}
