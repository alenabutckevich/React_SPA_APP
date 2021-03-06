import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';
import style from './movie-list.scss';
import classNames from 'classnames';

const MovieList = ({movies, genres}) => {
    const cssClass = classNames({
        [`${style.movie_list}`]: true,
        [`${style.movie_list_empty}`]: !movies.length
    });

    return (
    <div className={cssClass}>
        {
            movies.length > 0 ?
            <div>
                {
                    movies.map(({ id, title, poster_path, release_date, genre_ids }) => {
                        let genre = genres.filter(({id}) => id === genre_ids[0])[0];
                        genre = genre || "";

                        return <Movie id={id} title={title} image={poster_path} genre={genre.name} releaseDate={release_date} 
                            key={id} />})
                }
            </div> :
            <div>No films found</div>
        }
    </div>
)}

MovieList.propTypes = {
    movies: PropTypes.array,
    genres: PropTypes.array
}

MovieList.defaultProps = {
    movies: []
}

export default MovieList;
