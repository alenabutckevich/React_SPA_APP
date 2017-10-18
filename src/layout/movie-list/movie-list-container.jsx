import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieList from '.';
import * as actions from '../../actions/movieList';

class MovieListContainer extends Component {

    componentWillMount() {
        const { actions, query } = this.props;

        if (query) { 
            actions.fetchMovies(query);
        }
    }

    render() {
        let { movies, genres } = this.props;
        
        return (
            <MovieList movies={movies} genres={genres}/>
        );
    }
}

function mapStateToProps({ movieList, genreList }) {
    return {
        movies: movieList.movies,
        genres: genreList.genres
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
