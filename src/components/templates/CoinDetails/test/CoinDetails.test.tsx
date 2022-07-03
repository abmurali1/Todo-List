import React from 'react';
import renderer from 'react-test-renderer';
import CoinDetails from '../index';
import {SelectedCoinMode} from '../../../../services/models/allcoinsmodel';

const mockNavigate = jest.fn();
const mockSetOptions = jest.fn();

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
