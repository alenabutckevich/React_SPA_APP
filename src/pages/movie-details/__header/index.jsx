import React from 'react';
import { Link } from 'react-router-dom';
import MovieAnnotation from './movie-annotation';
import './movie-details__header.scss';

const MovieDetailsHeader = () => (
    <div>
        <Link to="/" className="search-link">search</Link>
        <MovieAnnotation></MovieAnnotation>
    </div>
)

export default MovieDetailsHeader;
