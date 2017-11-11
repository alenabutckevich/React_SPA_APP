import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import AppContainer from './app/app-container';
import Main from './pages/main';
import MovieDetails from './pages/movie-details';
import history from './history';
import configureStore from './store';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

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
