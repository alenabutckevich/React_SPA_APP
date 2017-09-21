import React from 'react';
import './movie-annotation.scss';
import data from '../../../data.json';

const MovieAnnotation = () => {
    let movie = data[0];
    return (
        <div className="movie-annotation">
            <img className="movie-annotation__image" src={movie.image}/>
            <h2 className="movie-annotation__title">{movie.title}</h2>
            <button className="movie-annotation__rating" disabled>{movie.rating}</button>
            <div className="movie-annotation__genre">{movie.genre}</div>
            <div className="movie-annotation__release-date">{movie.releaseDate}</div>
            <div className="movie-annotation__duration">{movie.duration}</div>
            <h2 className="movie-annotation__description">{movie.description}</h2>
            <div className="movie-annotation__director">Director: {movie.director}</div>
            <div className="movie-annotation__cast">Cast: {movie.cast}</div>
        </div>
    )
}

export default MovieAnnotation;
