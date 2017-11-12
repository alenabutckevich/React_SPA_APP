import { START_FETCHING_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../constants';

export default function genres(state = [], action) { 
    switch (action.type) {
        case START_FETCHING_GENRES:
            return { ...state, isFetching: true }
        case FETCH_GENRES_SUCCESS:
            return { ...state, genres: action.payload, error: null, isFetching: false }
        case FETCH_GENRES_FAILURE:
            return { ...state, genres: [], error: action.payload, isFetching: false }
        default:
            return state;
    }
}
