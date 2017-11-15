import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Main from '../pages/main';
import MovieDetails from '../pages/movie-details';
import { fetchGenres } from '../actions/asyncActions';

class App extends Component {

    componentWillMount() {
        const { fetchGenres } = this.props;

        fetchGenres();
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/search/:query" component={Main} />
                <Route path="/film/:id" component={MovieDetails} />
            </div>
        );
    }
}

export default withRouter(connect(null, { fetchGenres })(App));
