import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../index';

describe('<Home>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomePage title="Coin Market" navigation={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
