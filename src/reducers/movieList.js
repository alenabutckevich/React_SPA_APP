import * as types from '../constants';

export default function movies(state = [], action) { 
    switch (action.type) {
        case types.FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, error: null }
        case types.FETCH_MOVIES_FAILURE:
            return { ...state, movies: [], error: action.payload }
        default:
            return state;
    }
}
