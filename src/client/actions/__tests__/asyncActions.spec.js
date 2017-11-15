import { fetchGenres, fetchMovieById, fetchMovieCastAndCrew, fetchMovies } from '../asyncActions';
import { START_FETCHING_GENRES, START_FETCHING_MOVIE_BY_ID, START_FETCHING_MOVIE_CAST_AND_CREW, START_FETCHING_MOVIES } from '../../constants';

describe('async actions', () => {
  it('should create an action to start genres fetching', () => {
    const expectedAction = {
      type: START_FETCHING_GENRES,
    }
    expect(fetchGenres()).toEqual(expectedAction);
  });

  it('should create an action to start movie fetching', () => {
    const id = 1;
    const expectedAction = {
      type: START_FETCHING_MOVIE_BY_ID,
      payload: id
    }
    expect(fetchMovieById(id)).toEqual(expectedAction);
  });

  it('should create an action to start cast and crew fetching', () => {
    const id = 1;
    const expectedAction = {
      type: START_FETCHING_MOVIE_CAST_AND_CREW,
      payload: id
    }
    expect(fetchMovieCastAndCrew(id)).toEqual(expectedAction);
  });

  it('should create an action to start movies fetching', () => {
    const query = 'query';
    const filter = 'filter';
    const expectedAction = {
      type: START_FETCHING_MOVIES,
      payload: {
          query: query,
          filter: filter
      }
    }
    expect(fetchMovies(query, filter)).toEqual(expectedAction);
  });
});
