import { createSelector } from 'reselect';

const getSortFilter = ({ filter }) => filter;
const getMovies = ({ movies }) => movies;

export const getSortedMovies = createSelector(
    [getSortFilter, getMovies],
    (filter, movies) => {
        return movies ? [...movies.sort((a, b) => {
            if (filter === "release date") {
                return Number(b.release_date.split('-')[0]) - Number(a.release_date.split('-')[0]);
            }
            if (filter === "rating") {
                return b.vote_average - a.vote_average;
            }
        })] : [];
    }
)

export default getSortedMovies;
