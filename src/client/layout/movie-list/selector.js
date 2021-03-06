import { createSelector } from 'reselect';
import _ from 'lodash';
import { RELEASE_DATE_FILTER, RATING_FILTER } from './constants';

const getSortFilter = ({ filter }) => filter;
const getMovies = ({ movies }) => movies;

const sortMovies = (movies, filter) => {
    if (filter === RELEASE_DATE_FILTER.name) {
        const value = RELEASE_DATE_FILTER.value;
        return [...movies.sort((obj1, obj2) => new Date(_.get(obj2, value)) - new Date(_.get(obj1, value)))];
    }
    if (filter === RATING_FILTER.name) {
        const value = RATING_FILTER.value;
        return [...movies.sort((obj1, obj2) => (_.get(obj2, value) - _.get(obj1, value)))];
    }
}

export const getSortedMovies = createSelector(
    [getSortFilter, getMovies],
    (filter, movies) => {
        return movies ? sortMovies(movies, filter) : [];
    }
)