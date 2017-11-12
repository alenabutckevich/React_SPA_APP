import reducer from '../movieList';
import * as types from '../../constants';

describe('genre list reducer', () => {
    const movies = ['movie1', 'movie2'];

    it('should handle START_FETCHING_MOVIES_BY_TITLE', () => {
        expect(
            reducer([], {
                type: types.START_FETCHING_MOVIES_BY_TITLE
            })
        ).toEqual(
            {
                isFetching: true
            }
        )
    });

    it('should handle FETCH_MOVIES_BY_TITLE_SUCCESS', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIES_BY_TITLE_SUCCESS,
                payload: movies
            })
        ).toEqual(
            {
                movies: movies, 
                error: null, 
                isFetching: false
            }
        )
    });

    it('should handle FETCH_MOVIES_BY_TITLE_FAILURE', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIES_BY_TITLE_FAILURE,
                payload: 'error'
            })
        ).toEqual(
            {
                movies: [], 
                error: 'error', 
                isFetching: false
            }
        )
    });

    it('should handle START_FETCHING_MOVIES_BY_DIRECTOR', () => {
        expect(
            reducer([], {
                type: types.START_FETCHING_MOVIES_BY_DIRECTOR
            })
        ).toEqual(
            {
                isFetching: true
            }
        )
    });

    it('should handle FETCH_MOVIES_BY_DIRECTOR_SUCCESS', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIES_BY_DIRECTOR_SUCCESS,
                payload: movies
            })
        ).toEqual(
            {
                movies: movies, 
                error: null, 
                isFetching: false
            }
        )
    });

    it('should handle FETCH_MOVIES_BY_DIRECTOR_FAILURE', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIES_BY_DIRECTOR_FAILURE,
                payload: 'error'
            })
        ).toEqual(
            {
                movies: [], 
                error: 'error', 
                isFetching: false
            }
        )
    });
});
