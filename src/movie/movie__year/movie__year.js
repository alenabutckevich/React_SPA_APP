import React from 'react';
import './movie__year.scss';

const MovieYear = (props) => (
    <input className="movie__year" value={props.year} readOnly/>
)

export default MovieYear;