import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/container';
import configureStore from './store';
import rootSaga from './sagas';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

delete window.__PRELOADED_STATE__;

store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
