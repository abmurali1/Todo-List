import {actionTypes} from './actionTypes';
import {SelectedCoinMode} from '../../../services/models/allcoinsmodel';

type SelectCoinType = {
  coinDetails: SelectedCoinMode | null;
};

const intialState: SelectCoinType = {
  coinDetails: null,
};

const SelectedCoinReducer = (state = intialState, action: any) => {
  console.log('SelectedCoinReducer---->>>', action);
  switch (action.type) {
    case actionTypes.GET_SELECT_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        coinDetails: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default SelectedCoinReducer;
