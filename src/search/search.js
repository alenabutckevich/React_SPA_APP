import React from 'react';
import SearchHeader from './search__header/search__header';
import SearchInput from './search__input/search__input';
import SearchButton from './search__button/search__button';
import Filter from './filter/filter';
import './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', filter: 'title' };
        this.filters = [{id: 1, name: 'title'}, {id: 2, name: 'director'}];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.value);
    }

    handleEnterKeyPress(event) {
        if (event.keyCode == 13) {
            console.log(this.state.value);
        }
    }

    handleClick(filter) {
        this.setState({ filter: filter });
        console.log(this.state.filter);
    }

    render() {
        return (
            <div className="search">
                <SearchHeader></SearchHeader>
                <SearchInput value={this.state.value} handleChange={this.handleChange}
                    handleEnterKeyPress={this.handleEnterKeyPress}></SearchInput>
                <div>
                    <Filter filters={this.filters} handleClick={this.handleClick} 
                        currentFilter={this.state.filter}></Filter>
                    <SearchButton handleSubmit={this.handleSubmit}></SearchButton>
                </div>
            </div>
        )
    }
}

export default Search;
