import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/index';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create the redux store with the sagaMiddleware
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;