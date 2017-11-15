import React from 'react';
import MovieAnnotation from './movie-annotation';
import style from './movie-details__header.scss';

const MovieDetailsHeader = ({ movie, history, searchQuery, cast, director }) => {

    const handleClick = (e) => {;
        e.preventDefault(); 

        const url = searchQuery ? `/search/${searchQuery}` : '/';
        history.push(url);
    }

    return (
        <div>
            <a className={style.search_link} onClick={handleClick.bind(this)}>search</a>
            <MovieAnnotation movie={movie} cast={cast} director={director}></MovieAnnotation>
        </div>
    )
}

export default MovieDetailsHeader;
