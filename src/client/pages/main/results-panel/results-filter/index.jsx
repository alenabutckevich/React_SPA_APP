import React from 'react';
import style from './results-filter.scss';
import { RELEASE_DATE_FILTER, RATING_FILTER } from './constants';
import classNames from 'classnames';

const ResultsFilter = ({ currentFilter, setSortFilter }) => {
    const releaseDateCssClass = classNames({
        [`${style.results_filter__link}`]: true,
        [`${style.results_filter__link_active}`]: currentFilter === RELEASE_DATE_FILTER
    });
    const ratingCssClass = classNames({
        [`${style.results_filter__link}`]: true,
        [`${style.results_filter__link_active}`]: currentFilter === RATING_FILTER
    });

    return (
        <div className={style.results_filter}>
            <span className={style.results_filter__header}>Sort by</span>
            <div style={{ float: "left" }}>
                <a className={releaseDateCssClass} key={1} onClick={() => setSortFilter(RELEASE_DATE_FILTER)}>
                    {RELEASE_DATE_FILTER}
                </a>
                <a className={ratingCssClass} key={2} onClick={() => setSortFilter(RATING_FILTER)}>
                    {RATING_FILTER}
                </a>
            </div>
        </div>
    )
}

export default ResultsFilter;
