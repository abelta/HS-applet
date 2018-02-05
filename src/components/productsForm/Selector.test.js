import React from 'react';
import renderer from 'react-test-renderer';
import Selector from './Selector';

describe('Selector', () => {
  const tree = renderer.create(<Selector onClick={jest.fn}>Segment</Selector>).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
