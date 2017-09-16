import React from 'react';
import './movie__genre.scss';

const MovieGenre = (props) => (
    <div className="movie__genre">
        {props.genre}
    </div>
)

export default MovieGenre;