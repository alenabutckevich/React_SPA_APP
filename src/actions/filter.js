import * as types from '../constants';

export const setSortFilter = (filter) => ({
    type: types.SET_SORT_FILTER,
    payload: filter
})

export const setSearchFilter = (filter) => ({
    type: types.SET_SEARCH_FILTER,
    payload: filter
})
