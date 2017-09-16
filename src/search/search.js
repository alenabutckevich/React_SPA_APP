import React from 'react';
import SearchHeader from './__header/search__header';
import SearchInput from './__input/search__input';
import SearchButton from './__button/search__button';
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
                <SearchHeader></SearchHeader>
                <SearchInput value={this.state.value} handleChange={this.handleChange}
                    handleEnterKeyPress={this.handleEnterKeyPress}></SearchInput>
                <div>
                    <SearchFilter filters={this.filters} changeSearchFilter={this.changeSearchFilter} 
                        currentFilter={this.state.filter}></SearchFilter>
                    <SearchButton handleSubmit={this.handleSubmit}></SearchButton>
                </div>
            </div>
        )
    }
}

export default Search;
