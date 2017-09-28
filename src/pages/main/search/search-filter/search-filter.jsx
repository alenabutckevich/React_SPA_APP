import React from 'react';
import './search-filter.scss';

const SearchFilter = ({filters, currentFilter}) => (
    <div className="search-filter">
        <span className="search-filter__header">search by</span>
        <div style={{float: "left"}}>
            {filters.map((filter) =>
                <button className={"search-filter__button " + (currentFilter === filter.name ? 
                    "search-filter__button_active" : "")} key={filter.id}>
                    {filter.name}
                </button>
            )}
        </div>
    </div>
)

export default SearchFilter;
