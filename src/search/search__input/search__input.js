import React from 'react';
import './search__input.scss';

const SearchInput = (props) => (
    <input className="search__input" value={props.value} onChange={props.handleChange}
            onKeyDown={props.handleEnterKeyPress} placeholder="Type the text..."/>
)

export default SearchInput;
