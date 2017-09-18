import React from 'react';
import ResultsFilter from './results-filter';
import './results-panel.scss';
import data from '../../../data.json';

const ResultsPanel = () => {
    let movies = data;
    let filters = [{id: 1, name: "release date"}, {id: 2, name: "rating"}];
    let isEmptyList = movies.length !== 0;
    return (
        <div className="results-panel">
            <div>
                {
                    isEmptyList ? <div className="results-panel__movies-count">
                        {movies.length} movies found</div> : null
                }
            </div>
            <div>
                {
                    isEmptyList ? <ResultsFilter currentFilter={filters[0].name} filters={filters}>
                        </ResultsFilter> : null
                }
            </div>
        </div>
    )
}

export default ResultsPanel;


