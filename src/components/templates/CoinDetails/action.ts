import {actionTypes} from './actionTypes';
export const getSelectCoinDetails = (coinname: string) => ({
  type: actionTypes.GET_SELECT_COIN_DETAILS,
  payload: {coinname},
});
