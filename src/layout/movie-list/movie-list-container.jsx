import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movie-list';
import { fetchMovies } from '../../actions/movieList';
import { getSortedMovies } from '../../selectors/moviesSelector';

class MovieListContainer extends Component {

    componentWillMount() {
        const { query, searchFilter, fetchMovies } = this.props;

        if (query) { 
            fetchMovies(query, searchFilter);
        }
    }

    // need to fetch movies after link was changed
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

export default connect(({ movieList: { movies }, sort: { filter }, genreList: { genres }, search: { currentFilter } }) =>
    ({
        movies: getSortedMovies({ movies, filter }),
        genres,
        searchFilter: currentFilter
    }), { fetchMovies })(MovieListContainer);
