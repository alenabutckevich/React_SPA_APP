import React from 'react';
import './movie-details__name.scss';

const MovieDetailsName = (props) => (
    <h2 className="movie-details__name">
        {props.title}
    </h2>
)

export default MovieDetailsName;
