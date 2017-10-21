import * as types from '../constants';

const initialState = {
    filters: ["release date", "rating"]
};

export default function filterstate(state = initialState, action) {
    switch (action.type) {
        case types.SET_SORT_FILTER:
             return { ...state, filter: action.payload }
        default:
            return state;
    }
}
