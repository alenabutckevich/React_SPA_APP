import React from 'react';
import './results-panel__movies-count.scss';

const MoviesCount = (props) => (
    <div className="results-panel__movies-count">{props.count} movies found</div>
)

export default MoviesCount;