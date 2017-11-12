import { setSortFilter } from '../sort';
import { SET_SORT_FILTER } from '../../constants';

describe('sort actions', () => {
  it('should create an action to set a sort filter', () => {
    const filter = 'filter';
    const expectedAction = {
      type: SET_SORT_FILTER,
      payload: filter
    }
    expect(setSortFilter(filter)).toEqual(expectedAction);
  });
});
