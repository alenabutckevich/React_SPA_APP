import React from 'react';
import './movie.scss';

const Movie = ({image, title, releaseDate, genre}) => (
    <div className="movie">
        <img className="movie__image" src={image}/>
        <div className="movie__title">{title}</div>
        <input className="movie__release-date" value={releaseDate} readOnly/>
        <div className="movie__genre">{genre}</div>
    </div>
)

export default Movie;
