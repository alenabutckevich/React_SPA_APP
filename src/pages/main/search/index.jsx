import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Search from './search';
import { setSearchQuery } from '../../../actions/movie';
import { setSearchFilter } from '../../../actions/filter';

const SearchContainer = ({ filters, currentFilter, searchQuery, setSearchFilter, setSearchQuery, changeUrl }) => {
    
    return(
    <Search filters={filters} currentFilter={currentFilter} searchQuery={searchQuery} changeFilter={setSearchFilter} 
        setSearchQuery={setSearchQuery} changeUrl={changeUrl}/>
    )
}

const mapStateToProps = ({ filter, movie }) => ({
    filters: filter.searchFilters,
    currentFilter: filter.searchFilter,
    searchQuery: movie.searchQuery
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setSearchQuery,
    setSearchFilter,
    changeUrl: (url) => push(`${url}`)
}, dispatch)

SearchContainer.PropTypes = {
    filters: PropTypes.array,
    currentFilter: PropTypes.string,
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.object,
    setSearchFilter: PropTypes.object
}

SearchContainer.defaultProps = {
    currentFilter: "title",
    searchQuery: ""
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));
