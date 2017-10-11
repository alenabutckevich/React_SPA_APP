import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import './movie-details.scss';

const MovieDetails = ({ movie, fetchMovieByTitle, history, resetCurrentMovie, searchQuery, currentFilter, fetchMovies }) => {
    const panelContent = <span className="director-panel">Films by {movie.director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader movie={movie} fetchMovieByTitle={fetchMovieByTitle} currentFilter={currentFilter}
            resetCurrentMovie={resetCurrentMovie} history={history} searchQuery={searchQuery} fetchMovies={fetchMovies}/>} panel={panelContent}/>
    )
}

export default MovieDetails;
