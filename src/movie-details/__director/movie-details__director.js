import React from 'react';
import './movie-details__director.scss';

const MovieDetailsDirector = (props) => (
    <div className="movie-details__director">
        Director: {props.director}
    </div>
)

export default MovieDetailsDirector;
