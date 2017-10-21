import { SET_SEARCH_FILTER, SET_SEARCH_QUERY } from '../constants';

const initialState = {
    filters: ["title", "director"]
};

export default function filterstate(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_FILTER:
             return { ...state, currentFilter: action.payload }
        case SET_SEARCH_QUERY:
            return { ...state, query: action.payload }
        default:
            return state;
    }
}
