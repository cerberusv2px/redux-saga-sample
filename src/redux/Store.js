import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import mainReducer from './Reducer';
import {rootSaga} from './Saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
