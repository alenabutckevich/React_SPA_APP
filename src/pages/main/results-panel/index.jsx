import React from 'react';
import ResultsFilter from './results-filter';
import './results-panel.scss';
import data from '../../../data.json';

const ResultsPanel = () => (
    <div className="results-panel">
        {
            data.movies.length ? (
                <div>
                    <span className="results-panel__movies-count">{data.movies.length} movies found</span>
                    <ResultsFilter currentFilter={data.filters[0].name} filters={data.filters} />
                </div>
            ) : null
        }
    </div>
)

export default ResultsPanel;


