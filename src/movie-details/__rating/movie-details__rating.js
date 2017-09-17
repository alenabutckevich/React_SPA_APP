import React from 'react';
import './movie-details__rating.scss';

const MovieDetailsRating = (props) => (
    <button className="movie-details__rating" disabled>{props.rating}</button>
)

export default MovieDetailsRating;
