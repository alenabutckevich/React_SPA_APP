import { combineReducers } from 'redux';
import filter from './filter';
import movie from './movie';

export default combineReducers({
    filter,
    movie
})