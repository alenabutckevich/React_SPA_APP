import React from 'react';
import { Link } from 'react-router-dom';
import MovieAnnotation from './movie-annotation';
import './movie-details__header.scss';

const MovieDetailsHeader = ({ movie, history, resetCurrentMovie, searchQuery, currentFilter, fetchMovies, cast, director }) => {

    const handleClick = (e) => {;
        e.preventDefault(); 

        let url = searchQuery ? `/search/${searchQuery}` : '/';
        history.push(url);
    }

    return (
        <div>
            <a className="search-link" onClick={handleClick.bind(this)}>search</a>
            <MovieAnnotation movie={movie} cast={cast} director={director}></MovieAnnotation>
        </div>
    )
}

export default MovieDetailsHeader;
