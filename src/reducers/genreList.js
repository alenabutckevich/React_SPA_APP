import * as types from '../constants';

export default function genres(state = [], action) { 
    switch (action.type) {
        case types.FETCH_GENRES_SUCCESS:
            return { ...state, genres: action.payload, error: null }
        case types.FETCH_GENRES_FAILURE:
            return { ...state, genres: [], error: action.payload }
        default:
            return state;
    }
}
