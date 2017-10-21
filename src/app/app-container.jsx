import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { fetchGenres } from '../actions/genreList';

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
