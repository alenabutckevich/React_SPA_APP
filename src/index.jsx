import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './app';
import Main from './pages/main';
import MovieDetails from './pages/movie-details';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Main} />
                <Route path="/search/:query" component={Main} />
                <Route path="/film/:title" component={MovieDetails} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);
