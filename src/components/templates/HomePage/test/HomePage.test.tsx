import React from 'react';
import renderer from 'react-test-renderer';
import I18n from '../../../../localization/index';
import HomePage from '../index';

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
  };
});

describe('<Home>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage title={I18n.t('start')} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
