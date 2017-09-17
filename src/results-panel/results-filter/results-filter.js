import React from 'react';
import './results-filter.scss';

const ResultsFilter = (props) => (
    <div className="results-filter">
        <div className="results-filter__header">Sort by</div>
        <div style={{ float: "left" }}>
            {props.filters.map((filter) =>
                <a href="" className={"results-filter__link " + (props.currentFilter === filter.name ?
                    "results-filter__link_active" : "")} onClick={props.changeSortFilter} key={filter.id}>
                    {filter.name === "releaseDate" ? "release date" : filter.name}
                </a>
            )}
        </div>
    </div>
)

export default ResultsFilter;
