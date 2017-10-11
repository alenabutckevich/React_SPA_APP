import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import './movie-details.scss';

const MovieDetails = ({ movie, fetchMovieByTitle, history, resetCurrentMovie, searchQuery }) => {
    const panelContent = <span className="director-panel">Films by {movie.director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader movie={movie} fetchMovieByTitle={fetchMovieByTitle} 
            resetCurrentMovie={resetCurrentMovie} history={history} searchQuery={searchQuery} />} panel={panelContent}/>
    )
}

export default MovieDetails;
