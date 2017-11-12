import { SET_SEARCH_FILTER, SET_SEARCH_QUERY } from '../constants';

export const setSearchFilter = (filter) => ({
    type: SET_SEARCH_FILTER,
    payload: filter
})

export const setSearchQuery = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query
});

