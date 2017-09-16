import React from 'react';
import './search-filter__button.scss';
import './search-filter__button_active.scss';

const SearchFilterButton = (props) => (
    <button className={"search-filter__button " + (props.currentFilter === props.name ? 
        "search-filter__button_active" : "")} onClick={props.changeSearchFilter.bind(this, props.name)}>
        {props.name}
    </button>
)

export default SearchFilterButton;
