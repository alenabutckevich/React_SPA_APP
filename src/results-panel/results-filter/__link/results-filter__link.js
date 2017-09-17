import React from 'react';
import './results-filter__link.scss';
import './results-filter__link_active.scss';

const ResultsFilterLink = (props) => (
    <a href="" className={"results-filter__link " + (props.currentFilter === props.name ? 
        "results-filter__link_active" : "")} onClick={props.changeSortFilter}>
        {props.name === "releaseDate" ? "release date" : props.name}
    </a>
)

export default ResultsFilterLink;