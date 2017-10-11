import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MovieList from './movie-list';
import * as actions from '../../actions/movie';

class MovieListContainer extends Component {

    componentDidMount() {
        const { movie, actions } = this.props;

        if (movie) actions.fetchMovies(movie.director, "director");
    }

    componentWillReceiveProps(newProps) {  
        const { movie, actions } = this.props;
        let { searchQuery, searchFilter } = this.props;

        if (movie) {
            if (movie.show_title === newProps.movie.show_title) return;

            actions.fetchMovies(newProps.movie.director, "director");
        } 
    }

    render() {
        const { sortFilter, movie } = this.props;
        let movies = this.props.movies;

        if (movie) {
            movies = movies.filter((movie) => (movie.show_title !== this.props.movie.show_title));
        }

        movies = movies.length > 1 ? movies.sort((a, b) => (b[sortFilter] - a[sortFilter])) : movies;

        return (
            <MovieList movies={movies} />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movie.movies,
        movie: state.movie.currentMovie,
        searchQuery: state.movie.searchQuery,
        searchFilter: state.filter.searchFilter,
        sortFilter: state.filter.sortFilter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

MovieListContainer.propTypes = {
    movies: PropTypes.array,
    movie: PropTypes.object,
    searchQuery: PropTypes.string,
    searchFilter: PropTypes.string,
    sortFilter: PropTypes.string,
    actions: PropTypes.object
}

MovieListContainer.defaultProps = {
    movies: [],
    searchQuery: null,
    searchFilter: "title",
    sortFilter: "release_year"
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
