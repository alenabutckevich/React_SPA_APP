import React from 'react';
import MovieAnnotation from './movie-annotation';
import './movie-details__header.scss';

const MovieDetailsHeader = ({ movie, history, searchQuery, cast, director }) => {

    const handleClick = (e) => {;
        e.preventDefault(); 

        const url = searchQuery ? `/search/${searchQuery}` : '/';
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
