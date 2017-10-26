import * as types from '../constants';

const initialState = {
    filter: "release date"
};

export default function sort(state = initialState, action) {
    switch (action.type) {
        case types.SET_SORT_FILTER:
             return { ...state, filter: action.payload }
        default:
            return state;
    }
}
