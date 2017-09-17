import React from 'react';
import './movie.scss';

const Filter = (props) => (
    <div className="movie">
        <img className="movie__image" src={props.image}/>
        <div className="movie__title">{props.title}</div>
        <input className="movie__release-date" value={props.releaseDate} readOnly/>
        <div className="movie__genre">{props.genre}</div>
    </div>
)

export default Filter;