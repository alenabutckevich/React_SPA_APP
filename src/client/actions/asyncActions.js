import { START_FETCHING_GENRES, START_FETCHING_MOVIE_BY_ID, START_FETCHING_MOVIE_CAST_AND_CREW, START_FETCHING_MOVIES } from '../constants';

export const fetchGenres = () => ({
    type: START_FETCHING_GENRES
});

export const fetchMovieById = (id) => ({
    type: START_FETCHING_MOVIE_BY_ID,
    payload: id
});

export const fetchMovieCastAndCrew = (id) => ({
    type: START_FETCHING_MOVIE_CAST_AND_CREW,
    payload: id
});

export const fetchMovies = (query, filter) => ({
    type: START_FETCHING_MOVIES,
    payload: {
        query: query,
        filter: filter
    }
}); 

