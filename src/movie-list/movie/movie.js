import React from 'react';
import MovieImage from './movie__image/movie__image';
import MovieName from './movie__name/movie__name';
import MovieYear from './movie__year/movie__year';
import MovieGenre from './movie__genre/movie__genre';
import './movie.scss';

const Filter = (props) => (
    <div className="movie">
        <MovieImage image={props.image}></MovieImage>
        <MovieName name={props.name}></MovieName>
        <MovieYear year={props.year}></MovieYear>
        <MovieGenre genre={props.genre}></MovieGenre>        
    </div>
)

export default Filter;