import createSagaMiddleware, { END } from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    return {
        ...store,
        runSaga: sagaMiddleware.run,
        close: () => store.dispatch(END)
    }
}

export default configureStore;