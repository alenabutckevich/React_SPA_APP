import React from 'react';
import style from './movie-annotation.scss';

const MovieAnnotation = ({ movie: { poster_path, title, vote_average, genres, release_date, runtime, overview }, cast,
    director }) => {
    const genre = genres[0] || "";

    return (
        <div className={style.movie_annotation}>
            <img className={style.movie_annotation__image} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <h2 className={style.movie_annotation__title}>{title}</h2>
            <button className={style.movie_annotation__rating} disabled>{vote_average}</button>
            <div className={style.movie_annotation__genre}>{genre.name || ""}</div>
            <div className={style.movie_annotation__release_date}>{release_date.split('-')[0]}</div>
            <div className={style.movie_annotation__duration}>{`${runtime || 0} min`}</div>
            <h2 className={style.movie_annotation__description}>{overview}</h2>
            <div className={style.movie_annotation__director}>Director: {director}</div>
            <div className={style.movie_annotation__cast}>Cast: {cast}</div>
        </div>
    )
}

export default MovieAnnotation;
