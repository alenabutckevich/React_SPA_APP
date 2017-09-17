import React from 'react';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import Header from '../header/header';
import ResultsPanel from '../results-panel/results-panel';
import data from '../data.json';
import './main-page.scss';

class MainPage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { movies: [], sort: this.sortByYear };

        this.filterMovies = this.filterMovies.bind(this);
        this.sortMovies = this.sortMovies.bind(this);
    }

    filterMovies(filter, value) {
        let movies = data;

        movies = value === '' ? [] : 
            movies.filter((movie) => (movie[filter].toLowerCase().indexOf(value) !== -1));

        this.setState({ movies: movies });
    }

    sortMovies(filter) {
        let sort = filter === "release date" ? this.sortByYear : this.sortByRating;
        
        this.setState({ sort: sort });
    }

    sortByYear(val1, val2) {
        return val2.releaseDate - val1.releaseDate;
    }

    sortByRating(val1, val2) {
        return val2.rating - val1.rating;
    }

    render() {
        return (
            <div className="main-page">
                <Header filterMovies={this.filterMovies}></Header>
                <ResultsPanel movies={this.state.movies} sortMovies={this.sortMovies}></ResultsPanel>
                <MovieList movies={this.state.movies} sort={this.state.sort}></MovieList>
                <Footer></Footer>
            </div>
        )
    }
}

export default MainPage;
