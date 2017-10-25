import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsPanel from './results-panel';
import { setSortFilter } from '../../../actions/sort';

const ResultsPanelContainer = ({movies, filter, setSortFilter}) => 
    <ResultsPanel movies={movies} currentFilter={filter} setSortFilter={setSortFilter} />
   
export default connect(({ movieList: {movies}, sort: {filter} }) => ({ movies, filter }),
    {setSortFilter})(ResultsPanelContainer);


