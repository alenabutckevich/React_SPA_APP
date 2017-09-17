import React from 'react';
import Movie from './movie/movie';
import './movie-list.scss';
import './movie-list_empty.scss';

const MovieList = (props) => {
    let movies = props.sort ? props.movies.sort(props.sort) : props.movies;
    let isEmptyList = movies.length === 0;

    return (
        <div className={"movie-list " + (isEmptyList ? "movie-list_empty" : "")}>
            {
                isEmptyList ? <div>No films found</div> :
                    <div>
                        
                        {
                            movies.map((movie) => <Movie title={movie.title}
                                image={movie.image} genre={movie.genre} year={movie["release date"]}
                                key={movie.id}></Movie>)
                        }
                    </div>
            }
        </div>
    )
}

export default MovieList;
