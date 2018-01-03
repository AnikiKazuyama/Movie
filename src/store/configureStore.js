import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'

import  app  from '../reducers/index';

import watchFetch from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();


export default function configureStore(){
    const store = createStore(app, applyMiddleware(sagaMiddleware, loggerMiddleware));
    sagaMiddleware.run(watchFetch);
    return store;
}
