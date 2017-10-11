import React from 'react';
import './movie-annotation.scss';

const MovieAnnotation = ({ movie }) => (
    <div className="movie-annotation">
        <img className="movie-annotation__image" src={movie.poster} />
        <h2 className="movie-annotation__title">{movie.show_title}</h2>
        <button className="movie-annotation__rating" disabled>{movie.rating}</button>
        <div className="movie-annotation__genre">{movie.category}</div>
        <div className="movie-annotation__release-date">{movie.release_year}</div>
        <div className="movie-annotation__duration">{movie.runtime}</div>
        <h2 className="movie-annotation__description">{movie.summary}</h2>
        <div className="movie-annotation__director">Director: {movie.director}</div>
        <div className="movie-annotation__cast">Cast: {movie.show_cast}</div>
    </div>
)

export default MovieAnnotation;
