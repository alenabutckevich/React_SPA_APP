import * as types from '../constants';

export default function moviestate(state = [], action) { 
    switch (action.type) {
        case types.START_FETCHING_MOVIE_BY_ID:
            return { ...state, isFetching: true }
        case types.FETCH_MOVIE_BY_ID_SUCCESS:
            return { ...state, currentMovie: action.payload, error: null, isFetching: false }
        case types.FETCH_MOVIE_BY_ID_FAILURE:
            return { ...state, currentMovie: null, error: action.payload, isFetching: false }
        case types.START_FETCHING_MOVIE_CAST_AND_CREW:
            return { ...state, isFetching: true }
        case types.FETCH_MOVIE_CAST_AND_CREW_SUCCESS:
            return { ...state, cast: action.payload.cast, crew: action.payload.crew, error: null, isFetching: false }
        case types.FETCH_MOVIE_CAST_AND_CREW_FAILURE:
            return { ...state, currentMovie: null, error: action.payload, isFetching: false }
        case types.SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload }
        case types.RESET_CURRENT_MOVIE:
            return { ...state, currentMovie: null}
        default:
            return state;
    }
}
