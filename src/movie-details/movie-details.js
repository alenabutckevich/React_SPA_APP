import React from 'react';
import Logo from '../logo/logo';
import MovieDetailsImage from './__image/movie-details__image';
import MovieDetailsName from './__name/movie-details__name';
import MovieDetailsYear from './__year/movie-details__year';
import MovieDetailsGenre from './__genre/movie-details__genre';
import MovieDetailsDuration from './__duration/movie-details__duration';
import MovieDetailsDescription from './__description/movie-details__description';
import MovieDetailsDirector from './__director/movie-details__director';
import MovieDetailsCast from './__cast/movie-details__cast';
import MovieDetailsRating from './__rating/movie-details__rating';
import SearchButton from '../search-button/search-button';
import './movie-details.scss';

const MovieDetails = (props) => {
    return (
        <div className="movie-details">
            <div style={{ marginLeft: "3%" }}>
                <Logo></Logo>
                <SearchButton></SearchButton>
            </div>
            <MovieDetailsImage image={props.movie.image}></MovieDetailsImage>
            <MovieDetailsName title={props.movie.title}></MovieDetailsName>
            <MovieDetailsRating rating={props.movie.rating}></MovieDetailsRating>
            <MovieDetailsGenre genre={props.movie.genre}></MovieDetailsGenre>
            <MovieDetailsYear year={props.movie["release date"]}></MovieDetailsYear>
            <MovieDetailsDuration duration={props.movie.duration}></MovieDetailsDuration>
            <MovieDetailsDescription description={props.movie.description}></MovieDetailsDescription>
            <MovieDetailsDirector director={props.movie.director}></MovieDetailsDirector>
            <MovieDetailsCast cast={props.movie.cast}></MovieDetailsCast>
        </div>
    )
}

export default MovieDetails;