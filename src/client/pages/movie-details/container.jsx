import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetails from './movie-details';
import { fetchMovieById, fetchMovieCastAndCrew } from '../../actions/asyncActions';

class MovieDetailsContainer extends Component {
    constructor(props) {
        super(props);
 
        this.parseCastToString = this.parseCastToString.bind(this);
        this.parseCrewToString = this.parseCrewToString.bind(this);
    }

    parseCastToString = (cast) => {
        if (!cast) return;

        let castNames = "";
        cast.forEach((actor, index) => {
            let separator = index < cast.length - 1 ? ", " : "";
            castNames = castNames.concat(actor.name, separator);
        });
        return castNames;
    }

    parseCrewToString = (crew) => {
        if (!crew) return;

        let directorNames = "";
        crew.forEach((man) => {
            if (man.job !== "Director") return;
            directorNames = directorNames.concat(man.name, ', ');
        });
        return directorNames.slice(0, -2);
    }

    componentDidMount() {
        const { fetchMovieById, fetchMovieCastAndCrew, match: { params: { id }} } = this.props;

        fetchMovieById(id);
        fetchMovieCastAndCrew(id);
    }

    componentWillReceiveProps({ match: { params: { id }} }) {
        const { fetchMovieById, fetchMovieCastAndCrew } = this.props;
        const prevId = this.props.match.params.id;

        if (id === prevId) return;

        fetchMovieById(id);
        fetchMovieCastAndCrew(id);
    }

    render() {
        const { movie, history, searchQuery, cast, crew } = this.props;

        this.cast = this.parseCastToString(cast);
        this.crew = this.parseCrewToString(crew);
        const director = this.crew ? this.crew.split(',')[0] : "";

        return (
            movie && <MovieDetails movie={movie} history={history} cast={this.cast} director={director} 
                searchQuery={searchQuery}></MovieDetails>
        );
    }
}

function mapStateToProps({ movie: { currentMovie, cast, crew }, search: { currentFilter, query } }) {
    return {
        movie: currentMovie,
        cast: cast,
        crew: crew,
        searchQuery: query,
        searchFilter: currentFilter
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.object,
    fetchMovieById: PropTypes.func,
    fetchMovieCastAndCrew: PropTypes.func
}

MovieDetailsContainer.defaultProps = {
    movie: null
}

export default connect(mapStateToProps, { fetchMovieById, fetchMovieCastAndCrew })(MovieDetailsContainer);
