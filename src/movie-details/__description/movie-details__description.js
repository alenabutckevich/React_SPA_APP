import React from 'react';
import './movie-details__description.scss';

const MovieDetailsDescription = (props) => (
    <h2 className="movie-details__description">
        {props.description}
    </h2>
)

export default MovieDetailsDescription;
