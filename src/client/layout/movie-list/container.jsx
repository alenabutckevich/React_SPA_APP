import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movie-list';
import { fetchMovies } from '../../actions/asyncActions';
import PropTypes from 'prop-types';
import { getSortedMovies } from './selector';
import { TITLE_FILTER } from './constants';

class MovieListContainer extends Component {

    componentWillMount() {
        const { query , searchFilter, fetchMovies } = this.props;

        fetchMovies(query, searchFilter);
    }

    componentDidUpdate(prevProps) {
        const { query, searchFilter, fetchMovies } = this.props;
        if (query === prevProps.query) return; 

        fetchMovies(query, searchFilter);
    }   

    render() {
        let { movies, genres, currentFilter} = this.props;

        return (
            <MovieList movies={movies} genres={genres}/>
        );
    }
}

MovieListContainer.propTypes = {
    searchFilter: PropTypes.string,
}

MovieListContainer.defaultProps = {
    searchFilter: TITLE_FILTER.name
}

export default connect(({ movieList: { movies }, sort: { filter }, genreList: { genres }, search: { currentFilter } }) =>
    ({
        movies: getSortedMovies({ movies, filter }),
        genres,
        searchFilter: currentFilter
    }), { fetchMovies })(MovieListContainer);
