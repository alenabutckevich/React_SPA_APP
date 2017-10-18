import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchFilter from './search-filter/search-filter';
import './search.scss';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.changeFilter = props.changeFilter;
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();

        const { history, setSearchQuery, currentFilter, fetchMovies, changeUrl } = this.props;
        const value = this.refs.searchInput.value;
        const link = value === "" ? "/" : `/search/${value}`;

        changeUrl(link);
        setSearchQuery(value);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const { history, setSearchQuery, currentFilter, fetchMovies, changeUrl } = this.props;
            const value = this.refs.searchInput.value;
            const link = value === "" ? "/" : `/search/${value}`;
    
            changeUrl(link);
            setSearchQuery(value);
        }
    }

    render() {
        const {filters, currentFilter, searchQuery} = this.props;
        return (
            <div className="search">
                <h2 className="search__header">find your movie</h2>
                <input className="search__input" defaultValue={searchQuery} ref="searchInput" onKeyPress={this.handleKeyPress}
                    placeholder="Type the text..." />
                <div>
                    <SearchFilter filters={filters} currentFilter={currentFilter} changeFilter={this.changeFilter}/>
                    <button onClick={this.handleClick.bind(this)} className="search__button">search</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Search);
