import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MovieDetails from './movie-details';
import { fetchMovieById, fetchMovieCastAndCrew } from '../../actions/movie';

class MovieDetailsContainer extends Component {

    componentDidMount() {
        const { fetchMovieById, fetchMovieCastAndCrew, match: {params: {id}} } = this.props;

        fetchMovieById(id);
        fetchMovieCastAndCrew(id);
    }

    componentWillReceiveProps({ match: {params: {id}} }) {
        const { fetchMovieById, fetchMovieCastAndCrew } = this.props;
        const prevId = this.props.params.id;

        if (id === prevId) return;

        fetchMovieById(id);
        fetchMovieCastAndCrew(id);
    }

    render() {  
        const { movie, history, searchQuery, fetchMovieById, fetchMovieCastAndCrew , searchFilter, cast, crew } = this.props;

        let castNames = "";
        cast.forEach((actor, index) => {
            let separator = index < cast.length - 1 ? ", " : "";
            castNames = castNames.concat(actor.name, separator);
        });

        let directorNames = "";
        crew.forEach((man, index) => {
            if (man.job !== "Director") return;
            directorNames = directorNames.concat(man.name, ', ');
        });
        directorNames = directorNames.slice(0, -2);

        return (
            movie && <MovieDetails movie={movie} history={history} searchQuery={searchQuery} currentFilter={searchFilter}
                resetCurrentMovie={actions.resetCurrentMovie} fetchMovies={actions.fetchMovies} cast={castNames}
                director={directorNames}></MovieDetails>
        );
    }
}

function mapStateToProps({ movie: {currentMovie, cast, crew, searchQuery}, filter: {searchFilter} }) {
    return {
        movie: currentMovie,
        cast: cast,
        crew: crew,
        searchQuery: searchQuery,
        searchFilter: searchFilter
    }
}

MovieDetailsContainer.propTypes = {
    movie: PropTypes.object,
    crew: PropTypes.string,
    director: PropTypes.string,
    searchQuery: PropTypes.string,
    searchFilter: PropTypes.string,
    actions: PropTypes.object
}


MovieDetailsContainer.defaultProps = {
    movie: null,
    cast: [],
    crew: [],
    searchFilter: "title"
}

export default connect(mapStateToProps, {fetchMovieById, fetchMovieCastAndCrew})(MovieDetailsContainer);
