import React from 'react';
import PropTypes from 'prop-types';
import SearchFilter from './search-filter/search-filter';
import style from './search.scss';

class Search extends React.Component {

    handleClick() {
        const { setSearchQuery, history } = this.props;
        const value = this.searchInput.value;
        const link = value === "" ? "/" : `/search/${value}`;

        history.push(link);
        setSearchQuery(value);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const { setSearchQuery, history } = this.props;
            const value = this.searchInput.value;
            const link = value === "" ? "/" : `/search/${value}`;
    
            history.push(link);
            setSearchQuery(value);
        }
    }

    render() {
        const {currentFilter, query, changeFilter} = this.props;
 
        return (
            <div className={style.search}>
                <h2 className={style.search__header}>find your movie</h2>
                <input className={style.search__input} defaultValue={query} ref={(input) => { this.searchInput = input; }}
                    onKeyPress={e => this.handleKeyPress(e)} placeholder="Type the text..." />
                <div>
                    <SearchFilter currentFilter={currentFilter} changeFilter={changeFilter}/>
                    <button onClick={() => this.handleClick()} className={style.search__button}>search</button>
                </div>
            </div>
        )
    }
}

Search.PropTypes = {
    currentFilter: PropTypes.string,
    query: PropTypes.string,
    setSearchQuery: PropTypes.func,
    changeFilter: PropTypes.func,
    history: PropTypes.object
}

Search.defaultProps = {
    currentFilter: "title",
    query: ""
}

export default Search;
