import React from 'react';
import MovieDetails from '../movie-details/movie-details';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';
import data from '../data.json';
import './detailed-movie-page.scss';

class DetailedMoviePage extends React.PureComponent {

    constructor(props) {
        super(props);
        let movies = data;
        let movie = data[0];

        movies = movies.filter((item) => 
            (item.director.indexOf(movie.director) !== -1));

        this.state = { movies: movies, movie: movie};
    }

    render() {
        return (
            <div className="detailed-movie-page">
                <MovieDetails movie={this.state.movie}></MovieDetails>
                <div className="director-panel">Films by {this.state.movie.director}</div>
                <MovieList movies={this.state.movies}></MovieList>
                <Footer></Footer>
            </div>
        )
    }
}

export default DetailedMoviePage;
