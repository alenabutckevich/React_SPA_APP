import React from 'react';
import './search__button.scss';

const SearchButton = (props) => (
    <button className="search__button" onClick={props.handleSubmit}>
        search
    </button>
)

export default SearchButton;
