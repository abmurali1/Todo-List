import {all} from 'redux-saga/effects';
import {getSelectCoinDetailsWatcher} from '../../components/templates/CoinDetails/saga';
import {getAllCoinsWatcher} from '../../components/templates/CoinMarket/saga';

export function* rootSaga() {
  yield all([getAllCoinsWatcher(), getSelectCoinDetailsWatcher()]);
}
