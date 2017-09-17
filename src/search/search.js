import React from 'react';
import SearchFilter from './search-filter/search-filter';
import './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', filter: 'title' };
        this.filters = [{id: 1, name: 'title'}, {id: 2, name: 'director'}];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        this.changeSearchFilter = this.changeSearchFilter.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.props.filterMovies(this.state.filter, this.state.value.toLowerCase());
    }

    handleEnterKeyPress(event) {
        if (event.keyCode == 13) {
            this.props.filterMovies(this.state.filter, this.state.value.toLowerCase());
        }
    }

    changeSearchFilter(filter) {
        this.setState({ filter: filter });
    }

    render() {
        return (
            <div className="search">
                <h2 className="search__header">find your movie</h2>
                <input className="search__input" value={this.state.value} onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyPress} placeholder="Type the text..."/>
                <div>
                    <SearchFilter filters={this.filters} changeSearchFilter={this.changeSearchFilter} 
                        currentFilter={this.state.filter}></SearchFilter>
                    <button className="search__button" onClick={this.handleSubmit}>search</button>
                </div>
            </div>
        )
    }
}

export default Search;
