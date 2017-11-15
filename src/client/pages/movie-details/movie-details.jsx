import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layout';
import MovieDetailsHeader from './__header';
import style from './movie-details.scss';

const MovieDetails = ({ movie, history, searchQuery, cast, director }) => {
    const panelContent = <span className={style.director_panel}>Films by {director}</span>;

    return (
        <Layout headerContent={<MovieDetailsHeader movie={movie} history={history} searchQuery={searchQuery} 
            cast={cast} director={director}/>} panel={panelContent} />
    )
}

MovieDetails.propTypes = {
    cast: PropTypes.string,
    director: PropTypes.string,
    history: PropTypes.object,
    searchQuery: PropTypes.string
}


MovieDetails.defaultProps = {
    cast: "",
    director: "",
    searchFilter: "title"
}

export default MovieDetails;
