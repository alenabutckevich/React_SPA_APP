import React from 'react';
import { TITLE_FILTER, DIRECTOR_FILTER } from './constants';
import style from './search-filter.scss';

const SearchFilter = ({currentFilter, changeFilter}) => (
    <div className={style.search_filter}>
        <span className={style.search_filter__header}>search by</span>
        <div style={{float: "left"}}>
            <button className={style.search_filter__button + ' ' + (currentFilter === TITLE_FILTER ?
                style.search_filter__button_active : "")} onClick={() => changeFilter(TITLE_FILTER)} key={1}>
                {TITLE_FILTER}
            </button>
            <button className={style.search_filter__button + ' ' + (currentFilter === DIRECTOR_FILTER ?
                style.search_filter__button_active : "")} onClick={() => changeFilter(DIRECTOR_FILTER)} key={2}>
                {DIRECTOR_FILTER}
            </button>
        </div>
    </div>
)

export default SearchFilter;
