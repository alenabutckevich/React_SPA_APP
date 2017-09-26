import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import data from '../../data.json';
import './movie-details.scss';

const MovieDetails = () => {
    let movie = data.movies[0];
    const panelContent = <span className="director-panel">Films by {movie.director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader/>} panel={panelContent}/>
    )
}

export default MovieDetails;
