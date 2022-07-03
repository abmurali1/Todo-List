import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('<Button>', () => {
  it('renders correctly', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(<Button title="Click" onPress={mockFn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
