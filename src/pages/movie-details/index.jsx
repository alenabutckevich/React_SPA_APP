import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import data from '../../data.json';
import './movie-details.scss';

const MovieDetails = () => {
    const panelContent = <span className="director-panel">Films by {data.movies[0].director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader/>} panel={panelContent}/>
    )
}

export default MovieDetails;
