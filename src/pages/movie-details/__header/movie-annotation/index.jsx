import React from 'react';
import './movie-annotation.scss';

const MovieAnnotation = ({ movie: { poster_path, title, vote_average, genres, release_date, runtime, overview }, cast,
    director }) => {
    const genre = genres[0] || "";

    return (
        <div className="movie-annotation">
            <img className="movie-annotation__image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <h2 className="movie-annotation__title">{title}</h2>
            <button className="movie-annotation__rating" disabled>{vote_average}</button>
            <div className="movie-annotation__genre">{genre.name || ""}</div>
            <div className="movie-annotation__release-date">{release_date}</div>
            <div className="movie-annotation__duration">{`${runtime} min`}</div>
            <h2 className="movie-annotation__description">{overview}</h2>
            <div className="movie-annotation__director">Director: {director}</div>
            <div className="movie-annotation__cast">Cast: {cast}</div>
        </div>
    )
}

export default MovieAnnotation;
