import reducer from '../sort';
import { SET_SORT_FILTER } from '../../constants';

describe('sort reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                filter: "release date"
            }
        )
    });

    it('should handle SET_SORT_FILTER', () => {
        expect(
            reducer([], {
                type: SET_SORT_FILTER,
                payload: 'filter'
            })
        ).toEqual(
            {
                filter: 'filter'
            }
        )
    });
});
