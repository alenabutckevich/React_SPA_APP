import React from 'react';
import './movie__name.scss';

const MovieName = (props) => (
    <div className="movie__name">
        {props.title}
    </div>
)

export default MovieName;