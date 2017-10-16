import * as types from '../constants';

export default function moviestate(state = [], action) { 
    switch (action.type) {
        case types.FETCH_MOVIE_BY_TITLE_SUCCESS:
            return { ...state, currentMovie: action.payload, error: null }
        case types.FETCH_MOVIE_BY_TITLE_FAILURE:
            return { ...state, currentMovie: null, error: action.payload }
        case types.SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload }
        case types.RESET_CURRENT_MOVIE:
            return { ...state, currentMovie: null}
        default:
            return state;
    }
}
