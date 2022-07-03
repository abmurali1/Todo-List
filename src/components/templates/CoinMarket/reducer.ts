import {actionTypes} from './actionTypes';
import {AllCoinsModel} from '../../../services/models/allcoinsmodel';

type AllCoinsType = {
  allCoins: AllCoinsModel[] | null;
};

const intialState: AllCoinsType = {
  allCoins: [],
};

const AllCoinsReducer = (state = intialState, action: any) => {
  console.log('AllCoinsReducer---->>>', action);
  switch (action.type) {
    case actionTypes.GET_ALL_COINS_SUCCESS:
      return {
        ...state,
        allCoins: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default AllCoinsReducer;
