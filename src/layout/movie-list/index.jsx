import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';
import './movie-list.scss';

const MovieList = ({movies, genres}) => (
    <div className={"movie-list " + (!movies.length ? "movie-list_empty" : "")}>
        {
            movies.length > 0 ?
            <div>
                {
                    movies.map((movie) => {
                        console.log(movies);
                        let genre = genres.filter((genre) => genre.id === movie.genre_ids[0])[0];
                        genre = genre === undefined ? "" : genre;

                        return <Movie title={movie.title} image={movie.poster_path} genre={genre.name}
                            releaseDate={movie.release_date} key={movie.id} />})
                }
            </div> :
            <div className="movie-list_empty">No films found</div>
        }
    </div>
)

MovieList.propTypes = {
    movies: PropTypes.array,
    genres: PropTypes.array
}

MovieList.defaultProps = {
    movies: []
}

export default MovieList;
