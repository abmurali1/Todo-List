import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import CoinMarket from '../index';
import {Provider} from 'react-redux';
import {store} from '../../../../store/configureStore';
import {GET_ALL_COINS} from '../../../../services/api-endpoints';
import {request} from '../../../../services/service';

const mockNavigate = jest.fn();
const mockSetOptions = jest.fn();

jest.mock('@react-navigation/native-stack', () => ({
  ...jest.requireActual('@react-navigation/native-stack'),
  useNavigation: () => ({
    navigate: mockNavigate,
    setOptions: mockSetOptions,
  }),
  createNavigationContainerRef: jest.fn(),
}));

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
  };
});

jest.mock('axios', () => {
  return {
    get: jest.fn(),
  };
});

describe('get selected coins', () => {
  it('return coins', () => {
    const mockResp = {dummyData: 'Dummy data'};
    const getCoins = request(GET_ALL_COINS(), 'GET');

    expect(getCoins).resolves.toEqual(mockResp);

    expect(axios.get).toHaveBeenCalledWith(GET_ALL_COINS());

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
