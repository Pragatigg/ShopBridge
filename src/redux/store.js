import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'redux/reducers';
import rootSaga from 'redux/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;