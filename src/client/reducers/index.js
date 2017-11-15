import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movie from './movie';
import movieList from './movieList';
import genreList from './genreList';
import sort from './sort';
import search from './search';

export default combineReducers({
    movie,
    movieList,
    genreList,
    sort,
    search,
    routing: routerReducer
})
