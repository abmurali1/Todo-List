import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../index';

describe('<Button>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage title="Coin Market" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
