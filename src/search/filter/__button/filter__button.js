import React from 'react';
import './filter__button.scss';
import './filter__button_active.scss';

const FilterButton = (props) => (
    <button className={"filter__button " + (props.currentFilter === props.name ? 
        "filter__button_active" : "")} onClick={props.handleClick.bind(this, props.name)}>
        {props.name}
    </button>
)

export default FilterButton;
