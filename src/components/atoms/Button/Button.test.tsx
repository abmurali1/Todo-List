import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
import {shallow} from 'enzyme';

describe('<Button>', () => {
  // it('should find the button', () => {
  //   const button = shallow(<Button onPress={jest.fn()} title="Start" />);
  //   button.find('button').simulate('click');
  //   expect(jest.fn().mock.calls.length).toEqual(1);
  // });
  it('renders correctly', () => {
    const mockFn = jest.fn();
    const tree = renderer
      .create(<Button title="Click" onPress={mockFn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
