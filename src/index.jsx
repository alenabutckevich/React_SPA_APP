import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './app/app-container';
import Main from './pages/main';
import MovieDetails from './pages/movie-details';
import rootReducer from './reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppContainer>
                <Route exact path="/" component={Main} />
                <Route path="/search/:query" component={Main} />
                <Route path="/film/:title" component={MovieDetails} />
            </AppContainer>
        </Router>
    </Provider>,
    document.getElementById('root')
);
