import React from 'react';
import './movie-details__cast.scss';

const MovieDetailsCast = (props) => (
    <div className="movie-details__cast">
        Cast: {props.cast}
    </div>
)

export default MovieDetailsCast;
