import React from 'react';
import './movie-details__image.scss';

const MovieDetailsImage = (props) => (
    <img className="movie-details__image" src={props.image}/>
)

export default MovieDetailsImage;

