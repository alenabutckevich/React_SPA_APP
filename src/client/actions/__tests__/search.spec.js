import { setSearchFilter, setSearchQuery } from '../search';
import { SET_SEARCH_FILTER, SET_SEARCH_QUERY } from '../../constants';

describe('search actions', () => {
  it('should create an action to set a search filter', () => {
    const filter = 'filter';
    const expectedAction = {
      type: SET_SEARCH_FILTER,
      payload: filter
    }
    expect(setSearchFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to set a search query', () => {
    const query = 'query';
    const expectedAction = {
      type: SET_SEARCH_QUERY,
      payload: query
    }
    expect(setSearchQuery(query)).toEqual(expectedAction);
  });
});

