import React from 'react';
import './movie__image.scss';

const MovieImage = (props) => (
    <img className="movie__image" src={props.image}/>
)

export default MovieImage;
