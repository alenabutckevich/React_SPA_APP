import React from 'react';
import FilterHeader from './__header/search-filter__header';
import FilterButton from './__button/search-filter__button';
import './search-filter.scss';

const SearchFilter = (props) => (
    <div className="search-filter">
        <FilterHeader></FilterHeader>
        <div style={{float: "left"}}>
            {props.filters.map((filter) =>
                <FilterButton name={filter.name} currentFilter={props.currentFilter}
                    changeSearchFilter={props.changeSearchFilter} key={filter.id}></FilterButton>
            )}
        </div>
    </div>
)

export default SearchFilter;