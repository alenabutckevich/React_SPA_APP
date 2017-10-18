import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieList from '.';
import { fetchMovies } from '../../actions/movieList';

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

export default connect(({ movieList: { movies }, genreList: { genres } }) => ({ movies, genres }),
  {fetchMovies})(MovieListContainer);
