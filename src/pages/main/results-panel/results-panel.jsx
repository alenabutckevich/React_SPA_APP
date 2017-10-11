import React from 'react';
import ResultsFilter from './results-filter';
import './results-panel.scss';

const ResultsPanel = ({ movies, filters, setSortFilter, currentFilter }) => (
    <div className="results-panel">
        {
            movies.length > 0 && (
                <div>
                    <span className="results-panel__movies-count">{movies.length} movies found</span>
                    <ResultsFilter currentFilter={currentFilter} filters={filters} setSortFilter={setSortFilter} />
                </div>
            )
        }
    </div>
)

export default ResultsPanel;


