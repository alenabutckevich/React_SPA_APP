import React from 'react';
import { Link } from 'react-router-dom';
import './movie.scss';

const Movie = ({image, title, releaseDate, genre}) => (
    <div className="movie">
        <Link to={`/film/${title}`}><img className="movie__image" src={image}/></Link>
        <span className="movie__title">{title}</span>
        <input className="movie__release-date" value={releaseDate} readOnly/>
        <span className="movie__genre">{genre}</span>
    </div>
)

export default Movie;
