import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import data from '../../data.json';
import './movie-details.scss';

const MovieDetails = () => {
    let movie = data[0];
    const movieDetailsHeader = <MovieDetailsHeader></MovieDetailsHeader>;
    const panel = <div className="director-panel">Films by {movie.director}</div>;

    return (
        <div>
            <Layout headerContent={movieDetailsHeader} panel={panel}></Layout>
        </div>
    )
}

export default MovieDetails;
