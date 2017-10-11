import React from 'react';
import './results-filter.scss';

const ResultsFilter = ({ filters, currentFilter, setSortFilter }) => {
    const changeFilter = function (filter, e) {
        e.stopPropagation();
        setSortFilter(filter);
    }

    return (
        <div className="results-filter">
            <span className="results-filter__header">Sort by</span>
            <div style={{ float: "left" }}>
                {filters.map((filter, index) =>
                    <a className={"results-filter__link " + (currentFilter === filter ?
                        "results-filter__link_active" : "")} key={index} onClick={changeFilter.bind(this, filter)}>
                        {filter === "release_year" ? "release date" : filter}
                    </a>
                )}
            </div>
        </div>
    )
}

export default ResultsFilter;
