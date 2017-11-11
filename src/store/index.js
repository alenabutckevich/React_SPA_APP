
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(routerMiddleware(history), sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}

export default configureStore;