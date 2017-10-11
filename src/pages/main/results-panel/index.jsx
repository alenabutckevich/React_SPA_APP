import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ResultsPanel from './results-panel';
import * as actions from '../../../actions/filter';

const ResultsPanelContainer = ({movies, filters, currentFilter, actions}) => 
    <ResultsPanel movies={movies} filters={filters} currentFilter={currentFilter} 
        setSortFilter={actions.setSortFilter} />

function mapStateToProps(state) {
    return {
        movies: state.movie.movies,
        filters: state.filter.sortFilters,
        currentFilter: state.filter.sortFilter
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
    currentFilter: PropTypes.string,
    actions: PropTypes.object
}

ResultsPanel.defaultProps = {
    movies: [],
    currentFilter: "release_year"
}
    
export default connect(mapStateToProps, mapDispatchToProps)(ResultsPanelContainer);


