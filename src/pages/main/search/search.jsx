import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

        const { setSearchQuery, changeUrl } = this.props;
        const value = this.refs.searchInput.value;
        const link = value === "" ? "/" : `/search/${value}`;

        changeUrl(link);
        setSearchQuery(value);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            const { setSearchQuery, changeUrl } = this.props;
            const value = this.refs.searchInput.value;
            const link = value === "" ? "/" : `/search/${value}`;
    
            changeUrl(link);
            setSearchQuery(value);
        }
    }

    render() {
        const {currentFilter, query} = this.props;
 
        return (
            <div className="search">
                <h2 className="search__header">find your movie</h2>
                <input className="search__input" defaultValue={query} ref="searchInput" onKeyPress={this.handleKeyPress}
                    placeholder="Type the text..." />
                <div>
                    <SearchFilter currentFilter={currentFilter} changeFilter={this.changeFilter}/>
                    <button onClick={this.handleClick.bind(this)} className="search__button">search</button>
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
    changeUrl: PropTypes.func
}

Search.defaultProps = {
    currentFilter: "title",
    query: ""
}

export default withRouter(Search);
