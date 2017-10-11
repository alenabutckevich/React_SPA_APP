import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MovieDetails from './movie-details';
import * as actions from '../../actions/movie';

class MovieDetailsContainer extends Component {

    componentDidMount() {
        const { actions, match } = this.props;
        actions.fetchMovieByTitle(match.params.title);
    }

    componentWillReceiveProps(newProps) {
        const { actions, match } = this.props;
        const title = newProps.match.params.title;

        if (title === match.params.title) return;
        actions.fetchMovieByTitle(title);
    }

    render() {  
        const { movie, history, searchQuery, actions } = this.props;
        return (
            movie && <MovieDetails movie={movie} history={history} searchQuery={searchQuery}
                resetCurrentMovie={actions.resetCurrentMovie}></MovieDetails>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movie.currentMovie,
        searchQuery: state.movie.searchQuery
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


MovieDetailsContainer.propTypes = {
    movie: PropTypes.object,
    searchQuery: PropTypes.string,
    actions: PropTypes.object
}


MovieDetailsContainer.defaultProps = {
    movie: null
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);