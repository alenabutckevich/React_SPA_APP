import React from 'react';
import './results-filter.scss';

const ResultsFilter = ({filters, currentFilter}) => (
    <div className="results-filter">
        <div className="results-filter__header">Sort by</div>
        <div style={{ float: "left" }}>
            {filters.map((filter) =>
                <a href="" className={"results-filter__link " + (currentFilter === filter.name ?
                    "results-filter__link_active" : "")} key={filter.id}>
                    {filter.name}
                </a>
            )}
        </div>
    </div>
)

export default ResultsFilter;
