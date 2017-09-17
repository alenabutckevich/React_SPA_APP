import React from 'react';
import './search-filter.scss';

const SearchFilter = (props) => (
    <div className="search-filter">
        <div className="search-filter__header">search by</div>
        <div style={{float: "left"}}>
            {props.filters.map((filter) =>
                <button className={"search-filter__button " + (props.currentFilter === filter.name ? "search-filter__button_active" : "")} 
                    onClick={props.changeSearchFilter.bind(this, filter.name)} key={filter.id}>
                    {filter.name}
                </button>
            )}
        </div>
    </div>
)

export default SearchFilter;