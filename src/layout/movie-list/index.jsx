import React from 'react';
import Movie from './movie';
import './movie-list.scss';
import data from '../../data.json';

const MovieList = () => {
    let movies = data.movies;
    let isEmptyList = movies.length === 0;

    return (
        <div className={"movie-list " + (isEmptyList ? "movie-list_empty" : "")}>
            {
                isEmptyList ? <span>No films found</span> :
                    <div>
                        
                        {
                            movies.map((movie) => <Movie title={movie.title}
                                image={movie.image} genre={movie.genre} releaseDate={movie.releaseDate}
                                key={movie.id}/>)
                        }
                    </div>
            }
        </div>
    )
}

export default MovieList;
