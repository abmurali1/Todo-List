import {actionTypes} from './actionTypes';
import {GET_ALL_COINS} from '../../../services/api-endpoints';
import {put, takeLatest} from 'redux-saga/effects';
import {request} from '../../../services/service';

function* getAllCoinsWorker(action: any) {
  try {
    const {response} = yield request(GET_ALL_COINS(), 'GET');
    console.log('getAllCoinsWorker--->>>', response);
    yield put({
      type: actionTypes.GET_ALL_COINS_SUCCESS,
      payload: response.data,
    });
    //action.payload.onSuccess(response.data);
  } catch (error) {
    //action.payload.onError(error);
  }
}
export function* getAllCoinsWatcher() {
  yield takeLatest(actionTypes.GET_ALL_COINS, getAllCoinsWorker);
}
