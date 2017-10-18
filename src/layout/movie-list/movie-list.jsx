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
                    movies.map(({ id, title, poster_path, release_date, genre_ids }) => {
                        let genre = genres.filter(({id}) => id === genre_ids[0])[0];
                        genre = genre === undefined ? "" : genre.name;

                        return <Movie title={title} image={poster_path} genre={genre} releaseDate={release_date} 
                            key={id} />})
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
