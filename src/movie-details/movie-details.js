import React from 'react';
import Logo from '../logo/logo';
import './movie-details.scss';

const MovieDetails = (props) => {
    return (
        <div className="movie-details">
            <div style={{ marginLeft: "3%" }}>
                <Logo></Logo>
                <button className="search-button">search</button>
            </div>
            <img className="movie-details__image" src={props.movie.image}/>
            <h2 className="movie-details__title">{props.movie.title}</h2>
            <button className="movie-details__rating" disabled>{props.movie.rating}</button>
            <div className="movie-details__genre">{props.movie.genre}</div>
            <div className="movie-details__release-date">{props.movie.releaseDate}</div>
            <div className="movie-details__duration">{props.movie.duration}</div>
            <h2 className="movie-details__description">{props.movie.description}</h2>
            <div className="movie-details__director">Director: {props.movie.director}</div>
            <div className="movie-details__cast">Cast: {props.movie.cast}</div>
        </div>
    )
}

export default MovieDetails;