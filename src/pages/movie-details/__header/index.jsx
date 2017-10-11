import React from 'react';
import { Link } from 'react-router-dom';
import MovieAnnotation from './movie-annotation';
import './movie-details__header.scss';

const MovieDetailsHeader = ({ movie, history, resetCurrentMovie, searchQuery, currentFilter, fetchMovies }) => {

    const handleClick = (e) => {;
        e.preventDefault(); 
        resetCurrentMovie();

        if (searchQuery) { 
            fetchMovies(searchQuery, currentFilter); 
        } else {
            fetchMovies("", "");
        }

        let url = searchQuery ? `/search/${searchQuery}` : '/';
        history.push(url);
    }

    return (
        <div>
            <a className="search-link" onClick={handleClick.bind(this)}>search</a>
            <MovieAnnotation movie={movie}></MovieAnnotation>
        </div>
    )
}

export default MovieDetailsHeader;
