import React from 'react';
import { Link } from 'react-router-dom';
import './movie.scss';

const Movie = ({image, title, releaseDate, genre}) => (
    <div className="movie">
        <Link to={`/film/${title}`}><img className="movie__image" src={image}/></Link>
        <div className="movie__title">{title}</div>
        <input className="movie__release-date" value={releaseDate} readOnly/>
        <div className="movie__genre">{genre}</div>
    </div>
)

export default Movie;
