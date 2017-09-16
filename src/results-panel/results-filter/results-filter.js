import React from 'react';
import ResultsFilterHeader from './__header/results-filter__header';
import ResultFilterLink from './__link/results-filter__link';
import './results-filter.scss';

const ResultsFilter = (props) => (
    <div className="results-filter">
        <ResultsFilterHeader></ResultsFilterHeader>
        <div style={{float: "left"}}>
            {props.filters.map((filter) =>
                <ResultFilterLink name={filter.name} currentFilter={props.currentFilter}
                changeSortFilter={props.changeSortFilter} key={filter.id}></ResultFilterLink>
            )}
        </div>
    </div>
)

export default ResultsFilter;
