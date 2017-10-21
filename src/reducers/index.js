import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filter from './filter';
import movie from './movie';
import movieList from './movieList';
import genreList from './genreList';
import sort from './sort';

export default combineReducers({
    filter,
    movie,
    movieList,
    genreList,
    sort,
    routing: routerReducer
})
