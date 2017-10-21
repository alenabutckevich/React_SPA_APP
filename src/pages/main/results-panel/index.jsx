import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ResultsPanel from './results-panel';
import * as actions from '../../../actions/filter';

const ResultsPanelContainer = ({movies, filters, filter, actions}) => 
    <ResultsPanel movies={movies} filters={filters} currentFilter={filter} 
        setSortFilter={actions.setSortFilter} />

function mapStateToProps(state) {
    return {
        movies: state.movieList.movies,
        filters: state.sort.filters,
        filter: state.sort.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

ResultsPanelContainer.propTypes = {
    movies: PropTypes.array,
    filters: PropTypes.array,
    filter: PropTypes.string,
    actions: PropTypes.object
}

ResultsPanelContainer.defaultProps = {
    movies: [],
    filter: "release date"
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ResultsPanelContainer);


