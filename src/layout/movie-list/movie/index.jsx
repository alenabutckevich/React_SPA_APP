import React from 'react';
import { Link } from 'react-router-dom';
import './movie.scss';

const Movie = ({id, image, title, releaseDate, genre}) => (
    <div className="movie">
        <Link to={`/film/${id}`}><img className="movie__image" src={`https://image.tmdb.org/t/p/w500/${image}`}/></Link>
        <span className="movie__title">{title}</span>
        <input className="movie__release-date" value={releaseDate.split('-')[0]} readOnly/>
        <div style={{clear: 'both'}}/>
        <span className="movie__genre">{genre}</span>
    </div>
)

export default Movie;
