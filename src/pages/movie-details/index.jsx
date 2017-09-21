import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../layout';
import MovieAnnotation from './movie-annotation';
import data from '../../data.json';
import './movie-details.scss';

const MovieDetails = ({history}) => {
    let movie = data[0];
    return (
        <div>
            <Layout headerContent={<div><button className="search-button" onClick={history.goBack}>
                search</button><MovieAnnotation></MovieAnnotation></div>}
                panel={<div className="director-panel">Films by {movie.director}</div>}></Layout>
        </div>
    )
}

export default withRouter(MovieDetails);
