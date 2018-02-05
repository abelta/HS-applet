import React from 'react';
import renderer from 'react-test-renderer';
import HSView from './HSView';

describe('HSView', () => {
  const tree = renderer.create(<HSView value={[1, 2, 3]} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
