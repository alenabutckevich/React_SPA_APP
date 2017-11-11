import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}

export default configureStore;