import React from 'react';
import FilterHeader from './filter__header/filter__header';
import FilterButton from './filter__button/filter__button';
import './filter.scss';

const Filter = (props) => (
    <div className="filter">
        <FilterHeader></FilterHeader>
        <div style={{float: "left"}}>
            {props.filters.map((filter) =>
                <FilterButton name={filter.name} currentFilter={props.currentFilter}
                    handleClick={props.handleClick} key={filter.id}></FilterButton>
            )}
        </div>
    </div>
)

export default Filter;