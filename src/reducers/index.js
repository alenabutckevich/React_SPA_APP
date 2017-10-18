import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filter from './filter';
import movie from './movie';
import movieList from './movieList';
import genreList from './genreList';

export default combineReducers({
    filter,
    movie,
    movieList,
    genreList,
    routing: routerReducer
})
