import React from 'react';
import renderer from 'react-test-renderer';
import Reference from './Reference';

describe('Reference', () => {
  const tree = renderer.create(<Reference id="id" name="name" />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
