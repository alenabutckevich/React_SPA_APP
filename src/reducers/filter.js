import * as types from '../constants';

const initialState = {
    searchFilters: ["title", "director"],
    sortFilters: ["release_year", "rating"]
};

export default function filterstate(state = initialState, action) {
    switch (action.type) {
        case types.SET_SORT_FILTER:
             return { ...state, sortFilter: action.payload }
        case types.SET_SEARCH_FILTER:
             return { ...state, searchFilter: action.payload }
        default:
            return state;
    }
}
