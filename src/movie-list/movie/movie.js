import React from 'react';
import MovieImage from './__image/movie__image';
import MovieName from './__name/movie__name';
import MovieYear from './__year/movie__year';
import MovieGenre from './__genre/movie__genre';
import './movie.scss';

const Filter = (props) => (
    <div className="movie">
        <MovieImage image={props.image}></MovieImage>
        <MovieName title={props.title}></MovieName>
        <MovieYear year={props.year}></MovieYear>
        <MovieGenre genre={props.genre}></MovieGenre>        
    </div>
)

export default Filter;