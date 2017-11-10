import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import AppContainer from './app/app-container';
import Main from './pages/main';
import MovieDetails from './pages/movie-details';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                <Route exact path="/" component={Main} />
                <Route path="/search/:query" component={Main} />
                <Route path="/film/:id" component={MovieDetails} />
            </AppContainer>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
