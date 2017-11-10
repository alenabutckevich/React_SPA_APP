import reducer from '../movie';
import * as types from '../../constants';

describe('genre list reducer', () => {
    it('should handle START_FETCHING_MOVIE_BY_ID', () => {
        expect(
            reducer([], {
                type: types.START_FETCHING_MOVIE_BY_ID
            })
        ).toEqual(
            {
                isFetching: true
            }
        )
    });

    it('should handle FETCH_MOVIE_BY_ID_SUCCESS', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIE_BY_ID_SUCCESS,
                payload: 'movie'
            })
        ).toEqual(
            {
                currentMovie: 'movie', 
                error: null, 
                isFetching: false
            }
        )
    });

    it('should handle FETCH_MOVIE_BY_ID_FAILURE', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIE_BY_ID_FAILURE,
                payload: 'error'
            })
        ).toEqual(
            {
                currentMovie: null, 
                error: 'error', 
                isFetching: false
            }
        )
    });

    it('should handle START_FETCHING_MOVIE_CAST_AND_CREW', () => {
        expect(
            reducer([], {
                type: types.START_FETCHING_MOVIE_CAST_AND_CREW
            })
        ).toEqual(
            {
                isFetching: true
            }
        )
    });

    it('should handle FETCH_MOVIE_CAST_AND_CREW_SUCCESS', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS,
                payload: {
                    cast: 'cast',
                    crew: 'crew'
                }
            })
        ).toEqual(
            {
                cast: 'cast', 
                crew: 'crew', 
                error: null, 
                isFetching: false
            }
        )
    });

    it('should handle FETCH_MOVIE_CAST_AND_CREW_FAILURE', () => {
        expect(
            reducer([], {
                type: types.FETCH_MOVIE_CAST_AND_CREW_FAILURE,
                payload: 'error'
            })
        ).toEqual(
            {
                currentMovie: null, 
                error: 'error', 
                isFetching: false
            }
        )
    });
});
