import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Search from './search';
import * as movieActions from '../../../actions/movie';
import * as filterActions from '../../../actions/filter';

const SearchContainer = ({ filters, currentFilter, searchQuery, filterActions, movieActions }) =>
    <Search filters={filters} currentFilter={currentFilter} searchQuery={searchQuery} changeFilter={filterActions.setSearchFilter} 
        setSearchQuery={movieActions.setSearchQuery}/>

function mapStateToProps(state) {
    return {
        filters: state.filter.searchFilters,
        currentFilter: state.filter.searchFilter,
        searchQuery: state.movie.searchQuery
    }
}

function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

Search.PropTypes = {
    filters: PropTypes.array,
    currentFilter: PropTypes.string,
    searchQuery: PropTypes.string,
    movieActions: PropTypes.object,
    filterActions: PropTypes.object
}

Search.defaultProps = {
    currentFilter: "title",
    searchQuery: ""
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);