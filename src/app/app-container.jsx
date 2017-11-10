import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchGenres } from '../actions/asyncActions';

class AppContainer extends Component {

    componentWillMount() {
        const { fetchGenres } = this.props;

        fetchGenres();
    }

    render() {
        const { children } = this.props;
 
        return (
            <div>{children}</div>
        );
    }
}

export default withRouter(connect(null, {fetchGenres})(AppContainer));
