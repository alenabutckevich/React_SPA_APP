import React from 'react';
import SearchFilter from './search-filter/search-filter';
import './search.scss';

const Search = () => {
    let filters = [{id: 1, name: "title"}, {id: 2, name: "director"}];
    return(
        <div className="search">
            <h2 className="search__header">find your movie</h2>
            <input className="search__input" placeholder="Type the text..." />
            <div>
                <SearchFilter filters={filters} currentFilter={filters[1].name}></SearchFilter>
                <button className="search__button">search</button>
            </div>
        </div>
    )
}

export default Search;
