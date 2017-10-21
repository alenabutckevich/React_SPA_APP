import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from './movie-list';
import { fetchMovies } from '../../actions/movieList';
import { getSortedMovies } from '../../selectors/moviesSelector';

class MovieListContainer extends Component {

    componentWillMount() {
        const { query, fetchMovies } = this.props;

        if (query) { 
            fetchMovies(query);
        }
    }

    render() {
        let { movies, genres } = this.props;
        
        return (
            <MovieList movies={movies} genres={genres}/>
        );
    }
}

export default connect(({ movieList: {movies}, sort: {filter}, genreList: { genres } }) => ({ movies: getSortedMovies({ movies, filter }), genres }),
  {fetchMovies})(MovieListContainer);
