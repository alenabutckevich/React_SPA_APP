import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import Main from './pages/main';
import MovieDetails from './pages/movie-details';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={Main} />
            <Route path="/search/:query" component={Main} />
            <Route path="/film/:title" component={MovieDetails} />
        </App>
    </Router>,
    document.getElementById('root')
);
