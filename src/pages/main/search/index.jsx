import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchFilter from './search-filter/search-filter';
import data from '../../../data.json';
import './search.scss';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.filters = data.filters;

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick() {
        const value = this.refs.searchInput.value;
        const link = value === "" ? "/" : `/search/${value}`;
        this.props.history.push(link);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }
    
    render() {
        return (
            <div className="search">
                <h2 className="search__header">find your movie</h2>
                <input className="search__input" ref="searchInput" onKeyPress={this.handleKeyPress}
                    placeholder="Type the text..." />
                <div>
                    <SearchFilter filters={this.filters} currentFilter={this.filters[1].name}/>
                    <button onClick={this.handleClick} className="search__button">search</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Search);
