import { fork } from 'redux-saga/effects';
import { watchFetchGenres } from './genreList';

export default function* rootSaga() {
  yield fork(watchFetchGenres);
}