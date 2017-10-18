import { START_FETCHING_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants';

export default function movies(state = [], action) { 
    debugger;
    switch (action.type) {
        case START_FETCHING_MOVIES:
            return { ...state, isFetching: true }
        case FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, error: null, isFetching: false }
        case FETCH_MOVIES_FAILURE:
            return { ...state, movies: [], error: action.payload, isFetching: false }
        default:
            return state;
    }
}
