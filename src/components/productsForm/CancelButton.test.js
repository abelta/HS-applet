import React from 'react';
import renderer from 'react-test-renderer';
import CancelButton from './CancelButton';

describe('CancelButton', () => {
  const tree = renderer.create(<CancelButton onClick={jest.fn} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
