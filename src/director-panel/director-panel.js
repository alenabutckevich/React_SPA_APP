import React from 'react';
import './director-panel.scss';

const DirectorPanel = (props) => (
    <div className="director-panel">Films by {props.director}</div>
)

export default DirectorPanel;