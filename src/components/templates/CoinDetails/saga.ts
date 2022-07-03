import {actionTypes} from './actionTypes';
import {GET_SELECT_COIN_DETAILS} from '../../../services/api-endpoints';
import {put, takeLatest} from 'redux-saga/effects';
import {request} from '../../../services/service';

function* getSelectCoinDetailsWorker(action: any) {
  try {
    const {response} = yield request(
      GET_SELECT_COIN_DETAILS(action.payload.coinname),
      'GET',
    );
    console.log('getSelectCoinDetailsWorker--->>>', response);
    yield put({
      type: actionTypes.GET_SELECT_COIN_DETAILS_SUCCESS,
      payload: response.data,
    });
    //action.payload.onSuccess(response.data);
  } catch (error) {
    //action.payload.onError(error);
  }
}
export function* getSelectCoinDetailsWatcher() {
  yield takeLatest(
    actionTypes.GET_SELECT_COIN_DETAILS,
    getSelectCoinDetailsWorker,
  );
}
