import React from 'react';
import { TITLE_FILTER, DIRECTOR_FILTER } from './constants';
import style from './search-filter.scss';
import classNames from 'classnames';

const SearchFilter = ({ currentFilter, changeFilter }) => {
    const titleCssClass = classNames({
        [`${style.search_filter__button}`]: true,
        [`${style.search_filter__button_active}`]: currentFilter === TITLE_FILTER 
    });
    const directorCssClass = classNames({
        [`${style.search_filter__button}`]: true,
        [`${style.search_filter__button_active}`]: currentFilter === DIRECTOR_FILTER
    });

    return (
        <div className={style.search_filter}>
            <span className={style.search_filter__header}>search by</span>
            <div style={{ float: "left" }}>
                <button className={titleCssClass} onClick={() => changeFilter(TITLE_FILTER)} key={1}>
                    {TITLE_FILTER}
                </button>
                <button className={directorCssClass} onClick={() => changeFilter(DIRECTOR_FILTER)} key={2}>
                    {DIRECTOR_FILTER}
                </button>
            </div>
        </div>
    )
}

export default SearchFilter;
