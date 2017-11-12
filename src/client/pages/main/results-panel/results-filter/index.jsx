import React from 'react';
import style from './results-filter.scss';
import { RELEASE_DATE_FILTER, RATING_FILTER } from './constants';

const ResultsFilter = ({ currentFilter, setSortFilter }) => {
    return (
        <div className={style.results_filter}>
            <span className={style.results_filter__header}>Sort by</span>
            <div style={{ float: "left" }}>
                <a className={style.results_filter__link + ' ' + (currentFilter === RELEASE_DATE_FILTER ?
                    style.results_filter__link_active : "")} key={1} onClick={() => setSortFilter(RELEASE_DATE_FILTER)}>
                    {RELEASE_DATE_FILTER}
                </a>
                <a className={style.results_filter__link + ' ' + (currentFilter === RATING_FILTER ?
                    style.results_filter__link_active : "")} key={2} onClick={() => setSortFilter(RATING_FILTER)}>
                    {RATING_FILTER}
                </a>
            </div>
        </div>
    )
}

export default ResultsFilter;
