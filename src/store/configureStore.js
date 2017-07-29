/**
 * Created by Shashank on 7/29/2017.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();


let middlewares;

if (process.env.NODE_ENV !== 'production') {
    let createLogger = require('redux-logger');
    const loggerMiddleware = createLogger();
    middlewares = applyMiddleware(sagaMiddleware, loggerMiddleware);

} else {
    middlewares = applyMiddleware(sagaMiddleware);
}


const finalCreateStore = compose(
    middlewares,
)(createStore);


export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    sagaMiddleware.run(rootSaga);
    return store;
}
