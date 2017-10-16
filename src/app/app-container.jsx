import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import App from '.';
import * as actions from '../actions/genreList';

class AppContainer extends Component {

    componentWillMount() {
        const { actions } = this.props;

        actions.fetchGenres();
    }

    render() {
        const { children } = this.props;
 
        return (
            <App children={children}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

AppContainer.defaultProps = {
    genres: []
}

export default connect(null, mapDispatchToProps)(AppContainer);
