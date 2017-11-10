import { fork } from 'redux-saga/effects';
import { watchFetchGenres } from './genreList';
import { watchFetchMovieById, watchFetchMovieCastAndCrew } from './movie';
import { watchFetchMovies } from './movieList';

export default function* rootSaga() {
  // yield fork ([
  //   watchFetchGenres,
  //   watchFetchMovieById,
  //   watchFetchMovieCastAndCrew,
  //   watchFetchMoviesByTitle,
  //   watchFetchMoviesByDirector
  // ]);
  yield fork(watchFetchGenres);
  yield fork(watchFetchMovieById);
  yield fork(watchFetchMovieCastAndCrew);
  yield fork(watchFetchMovies);
}