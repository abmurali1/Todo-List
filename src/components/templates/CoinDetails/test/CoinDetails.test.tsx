import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import CoinDetails from '../index';
import {GET_SELECT_COIN_DETAILS} from '../../../../services/api-endpoints';
import {request} from '../../../../services/service';

const mockNavigate = jest.fn();
const mockSetOptions = jest.fn();
jest.mock('axios', () => {
  return {
    get: jest.fn(),
  };
});

describe('get selected coins', () => {
  it('return coins', () => {
    const mockResp = {dummyData: 'Dummy data'};
    const getCoins = request(GET_SELECT_COIN_DETAILS('bitcoin'), 'GET');

    expect(getCoins).resolves.toEqual(mockResp);

    expect(axios.get).toHaveBeenCalledWith(GET_SELECT_COIN_DETAILS('bitcoin'));

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
    setOptions: mockSetOptions,
  }),
  createNavigationContainerRef: jest.fn(),
}));

describe('Coin Detaisl Page', () => {
  it('compare with snapshot test', () => {});
});
