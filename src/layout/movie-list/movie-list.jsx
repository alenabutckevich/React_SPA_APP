import React from 'react';
import Movie from './movie';
import './movie-list.scss';

const MovieList = ({movies}) => (
    <div className={"movie-list " + (!movies.length ? "movie-list_empty" : "")}>
        {
            movies.length > 0 ?
            <div>
                {
                    movies.map((movie) =>
                        <Movie title={movie.show_title} image={movie.poster} genre={movie.category}
                            releaseDate={movie.release_year} key={movie.show_id} />)
                }
            </div> :
            <div className="movie-list_empty">No films found</div>
        }
    </div>
)

export default MovieList;
