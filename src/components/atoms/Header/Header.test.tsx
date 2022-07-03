import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('<Header>', () => {
  it('renders correctly', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(<Header headerTitle="Click" onPress={mockFn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
