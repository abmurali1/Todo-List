import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AllCoinsReducer from '../components/templates/CoinMarket/reducer';
import {rootSaga} from '../services/sagas';
import SelectedCoinReducer from '../components/templates/CoinDetails/reducer';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(createLogger());

export const store = createStore(
  combineReducers({AllCoinsReducer, SelectedCoinReducer}),
  applyMiddleware(...middlewares),
);
sagaMiddleware.run(rootSaga);
