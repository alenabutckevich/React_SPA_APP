import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movie.scss';

const Movie = ({id, image, title, releaseDate, genre}) => (
    <div className={styles.movie}>
        <Link to={`/film/${id}`}><img className={styles.movie__image} src={`https://image.tmdb.org/t/p/w500/${image}`}/></Link>
        <span className={styles.movie__title}>{title}</span>
        <input className={styles.movie__release_date} value={releaseDate.split('-')[0]} readOnly/>
        <div style={{clear: 'both'}}/>
        <span className={styles.movie__genre}>{genre}</span>
    </div>
)

export default Movie;
