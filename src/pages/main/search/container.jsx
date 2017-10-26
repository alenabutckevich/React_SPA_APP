import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import Search from './search';
import { setSearchFilter, setSearchQuery } from '../../../actions/search';

const SearchContainer = ({ currentFilter, setSearchFilter, setSearchQuery, changeUrl, query }) => {
    
    return(
    <Search currentFilter={currentFilter} changeFilter={setSearchFilter} setSearchQuery={setSearchQuery} 
        changeUrl={changeUrl} query={query}/>
    )
}

export default withRouter(connect(({ search: { currentFilter, query } }) =>
    ({ currentFilter, query }), {setSearchQuery, setSearchFilter, changeUrl: (url) => push(`${url}`)})
    (SearchContainer));
