import React from 'react';
import './search-filter.scss';

const SearchFilter = ({filters, currentFilter, changeFilter}) => (
    <div className="search-filter">
        <span className="search-filter__header">search by</span>
        <div style={{float: "left"}}>
            {filters.map((filter, index) =>
                <button className={"search-filter__button " + (currentFilter === filter ? 
                    "search-filter__button_active" : "")} onClick={() => changeFilter(filter)} key={index}>
                    {filter}
                </button>
            )}
        </div>
    </div>
)

export default SearchFilter;
