import React from 'react';
import ResultsFilter from './results-filter';
import './results-panel.scss';
import data from '../../../data.json';

const ResultsPanel = () => {
    let movies = data.movies;
    let filters = data.filters;
    let isEmptyList = movies.length !== 0;
    return (
        <div className="results-panel">
            <div>
                {
                    isEmptyList ? <span className="results-panel__movies-count">
                        {movies.length} movies found</span> : null
                }
            </div>
            <div>
                {
                    isEmptyList ? <ResultsFilter currentFilter={filters[0].name} filters={filters}/> 
                        : null
                }
            </div>
        </div>
    )
}

export default ResultsPanel;


