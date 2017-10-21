import React from 'react';
import PropTypes from 'prop-types';
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

ResultsPanel.propTypes = {
    movies: PropTypes.array,
    filters: PropTypes.array,
    filter: PropTypes.string,
    setSortFilter: PropTypes.func
}

ResultsPanel.defaultProps = {
    movies: []
}

export default ResultsPanel;


