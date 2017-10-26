import * as types from '../constants';

export default function movies(state = [], action) { 
    switch (action.type) {
        case types.START_FETCHING_MOVIES_BY_TITLE:
            return { ...state, isFetching: true }
        case types.FETCH_MOVIES_BY_TITLE_SUCCESS:
            return { ...state, movies: action.payload, error: null, isFetching: false }
        case types.FETCH_MOVIES_BY_TITLE_FAILURE:
            return { ...state, movies: [], error: action.payload, isFetching: false }
        case types.START_FETCHING_MOVIES_BY_DIRECTOR:
            return { ...state, isFetching: true }
        case types.FETCH_MOVIES_BY_DIRECTOR_SUCCESS:
            return { ...state, movies: action.payload, error: null, isFetching: false }
        case types.FETCH_MOVIES_BY_DIRECTOR_FAILURE:
            return { ...state, movies: [], error: action.payload, isFetching: false }
        default:
            return state;
    }
}
