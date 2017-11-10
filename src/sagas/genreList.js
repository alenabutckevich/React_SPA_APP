import { call, put, takeEvery } from 'redux-saga/effects';
import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../constants';
import { getGenries } from '../services';

export function* watchFetchGenres() {
    yield takeEvery(START_FETCHING_GENRES, fetchGenres);
}

export function* fetchGenres() {
    try {
        const response = yield call(getGenries);
        console.log(response);

        yield put({ type: FETCH_GENRES_SUCCESS, payload: response.data.genres });
    } catch(error) {
        yield put({ type: FETCH_GENRES_FAILURE, payload: error });
    }
};
