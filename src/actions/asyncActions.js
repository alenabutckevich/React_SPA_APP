import * as types from '../constants';

export const fetchGenres = () => ({
    type: types.START_FETCHING_GENRES
});

export const fetchMovieById = (id) => ({
    type: types.START_FETCHING_MOVIE_BY_ID,
    payload: id
});

export const fetchMovieCastAndCrew = (id) => ({
    type: types.START_FETCHING_MOVIE_CAST_AND_CREW,
    payload: id
});

export const fetchMovies = (query, filter) => ({
    type: types.START_FETCHING_MOVIES,
    payload: {
        query: query,
        filter: filter
    }
}); 

// export const fetchMoviesByDirector = (query) => ({
//     type: types.START_FETCHING_MOVIES_BY_DIRECTOR,
//     payload: query
// });
