import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import './movie-details.scss';

const MovieDetails = ({ movie, fetchMovieById, history, resetCurrentMovie, searchQuery, currentFilter, fetchMovies, 
    cast, director }) => {
    const panelContent = <span className="director-panel">Films by {director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader movie={movie} fetchMovieById={fetchMovieById} 
            currentFilter={currentFilter} resetCurrentMovie={resetCurrentMovie} history={history} 
            searchQuery={searchQuery} fetchMovies={fetchMovies} cast={cast} director={director}/>} panel={panelContent} />
    )
}

export default MovieDetails;
