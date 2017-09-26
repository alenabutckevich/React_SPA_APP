import React from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from './search-filter/search-filter';
import './search.scss';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.filters = [{id: 1, name: "title"}, {id: 2, name: "director"}];

        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="search">
                <h2 className="search__header">find your movie</h2>
                <input className="search__input" value={this.state.value} onChange={this.handleChange}
                    placeholder="Type the text..." />
                <div>
                    <SearchFilter filters={this.filters} currentFilter={this.filters[1].name}/>
                    <Link to={this.state.value === "" ? "/" : `/search/${this.state.value}`}
                        className="search__link">search</Link>
                </div>
            </div>
        )
    }
}

export default Search;
