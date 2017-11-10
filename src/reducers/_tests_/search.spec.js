import reducer from '../search';
import { SET_SEARCH_FILTER, SET_SEARCH_QUERY } from '../../constants';

describe('search reducer', () => {
    it('should handle SET_SEARCH_FILTER', () => {
        expect(
            reducer([], {
                type: SET_SEARCH_FILTER,
                payload: 'filter'
            })
        ).toEqual(
            {
                currentFilter: 'filter'
            }
        )
    });

    it('should handle SET_SEARCH_QUERY', () => {
        expect(
            reducer([], {
                type: SET_SEARCH_QUERY,
                payload: 'query'
            })
        ).toEqual(
            {
                query: 'query'
            }
        )
    });
});

