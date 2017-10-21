import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import Search from './search';
import { setSearchFilter, setSearchQuery } from '../../../actions/search';

const SearchContainer = ({ filters, currentFilter, setSearchFilter, setSearchQuery, changeUrl }) => {
    
    return(
    <Search filters={filters} currentFilter={currentFilter} changeFilter={setSearchFilter} 
        setSearchQuery={setSearchQuery} changeUrl={changeUrl}/>
    )
}

export default withRouter(connect(({ search: { filters, currentFilter } }) =>
    ({ filters, currentFilter }), {setSearchQuery, setSearchFilter, changeUrl: (url) => push(`${url}`)})
    (SearchContainer));
