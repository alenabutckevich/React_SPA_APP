import { createSelector } from 'reselect';
import { get } from 'lodash';
import { RELEASE_DATE_FILTER, RATING_FILTER } from './constants';

const getSortFilter = ({ filter }) => filter;
const getMovies = ({ movies }) => movies;

const sortMovies = (movies, filter) => {
    if (filter === _.get(RELEASE_DATE_FILTER, 'name')) {
        const value = _.get(RELEASE_DATE_FILTER, 'value');
        return [...movies.sort((obj1, obj2) => new Date(_.get(obj2, value)) - new Date(_.get(obj1, value)))];
    }
    if (filter === _.get(RATING_FILTER, 'name')) {
        const value = _.get(RATING_FILTER, 'value');
        return [...movies.sort((obj1, obj2) => (_.get(obj2, value) - _.get(obj1, value)))];
    }
}

export const getSortedMovies = createSelector(
    [getSortFilter, getMovies],
    (filter, movies) => {
        return movies ? sortMovies(movies, filter) : [];
    }
)

export default getSortedMovies;
