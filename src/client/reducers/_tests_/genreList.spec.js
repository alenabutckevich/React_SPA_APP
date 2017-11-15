import reducer from '../genreList';
import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../../constants';

describe('genre list reducer', () => {
    it('should handle START_FETCHING_GENRES', () => {
        expect(
            reducer([], {
                type: START_FETCHING_GENRES
            })
        ).toEqual(
            {
                isFetching: true
            }
        )
    });

    it('should handle FETCH_GENRES_SUCCESS', () => {
        expect(
            reducer([], {
                type: FETCH_GENRES_SUCCESS,
                payload: ['genre1', 'genre2']
            })
        ).toEqual(
            {
                genres: ['genre1', 'genre2'],
                error: null,
                isFetching: false
            }
        )
    });

    it('should handle FETCH_GENRES_FAILURE', () => {
        expect(
            reducer([], {
                type: FETCH_GENRES_FAILURE,
                payload: 'error'
            })
        ).toEqual(
            {
                genres: [],
                error: 'error',
                isFetching: false
            }
        )
    });
})