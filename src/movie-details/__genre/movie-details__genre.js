import React from 'react';
import './movie-details__genre.scss';

const MovieDetailsGenre = (props) => (
    <div className="movie-details__genre">
        {props.genre}
    </div>
)

export default MovieDetailsGenre;
