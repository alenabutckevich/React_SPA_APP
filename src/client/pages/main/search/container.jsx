import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import Search from './search';
import { setSearchFilter, setSearchQuery } from '../../../actions/search';

const SearchContainer = ({ currentFilter, setSearchFilter, setSearchQuery, history, query }) => {
    
    return(
    <Search currentFilter={currentFilter} changeFilter={setSearchFilter} setSearchQuery={setSearchQuery} 
        history={history} query={query}/>
    )
}

export default withRouter(connect(({ search: { currentFilter, query } }) =>
    ({ currentFilter, query }), {setSearchQuery, setSearchFilter })(SearchContainer));
