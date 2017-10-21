import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultsPanel from './results-panel';
import { setSortFilter } from '../../../actions/sort';

const ResultsPanelContainer = ({movies, filters, filter, setSortFilter}) => 
    <ResultsPanel movies={movies} filters={filters} currentFilter={filter} 
        setSortFilter={setSortFilter} />
   
export default connect(({ movieList: {movies}, sort: {filter, filters} }) => ({ movies, filter, filters }),
    {setSortFilter})(ResultsPanelContainer);


