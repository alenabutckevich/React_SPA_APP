import React from 'react';
import { TITLE_FILTER, DIRECTOR_FILTER } from './constants';
import './search-filter.scss';

const SearchFilter = ({currentFilter, changeFilter}) => (
    <div className="search-filter">
        <span className="search-filter__header">search by</span>
        <div style={{float: "left"}}>
            <button className={"search-filter__button " + (currentFilter === TITLE_FILTER ?
                "search-filter__button_active" : "")} onClick={() => changeFilter(TITLE_FILTER)} key={1}>
                {TITLE_FILTER}
            </button>
            <button className={"search-filter__button " + (currentFilter === DIRECTOR_FILTER ?
                "search-filter__button_active" : "")} onClick={() => changeFilter(DIRECTOR_FILTER)} key={2}>
                {DIRECTOR_FILTER}
            </button>
        </div>
    </div>
)

export default SearchFilter;
