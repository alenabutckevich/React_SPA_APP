import React from 'react';
import Movie from './movie';
import './movie-list.scss';
import data from '../../data.json';

const MovieList = () => (
    <div className={"movie-list " + (!data.movies.length ? "movie-list_empty" : "")}>
        {
            data.movies.length &&
            <div>
                {
                    data.movies.map((movie) =>
                        <Movie title={movie.title} image={movie.image} genre={movie.genre}
                            releaseDate={movie.releaseDate} key={movie.id} />)
                }
            </div>
        }
    </div>
)

export default MovieList;
