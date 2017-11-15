import { all } from 'redux-saga/effects';
import { watchFetchGenres } from './genreList';
import { watchFetchMovieById, watchFetchMovieCastAndCrew } from './movie';
import { watchFetchMovies } from './movieList';

export default function* rootSaga() {
  yield all([
    watchFetchGenres(),
    watchFetchMovieById(),
    watchFetchMovieCastAndCrew(),
    watchFetchMovies()
  ])
}