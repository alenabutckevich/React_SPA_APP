import React from 'react';
import Movie from './movie/movie';
import data from '../data.json';
import './movie-list.scss';
import './movie-list_empty.scss';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: data };
        //this.state = { movies: [] };
    }

    render() {
        let isEmptyList = this.state.movies.length === 0;
        return (
            <div className={"movie-list " + (isEmptyList ? "movie-list_empty" : "")}>
                {
                    isEmptyList ? <div>No films found</div> :
                        <div>
                            {
                                this.state.movies.map((movie) => <Movie name={movie.name}
                                    image={movie.image} genre={movie.genre} year={movie.year} 
                                    key={movie.id}></Movie>)
                            }
                        </div>
                }
            </div>
        )
    }
}

export default MovieList;
