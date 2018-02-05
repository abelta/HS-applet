import React from 'react';
import renderer from 'react-test-renderer';
import RemoveButton from './RemoveButton';

describe('RemoveButton', () => {
  const tree = renderer.create(<RemoveButton onClick={jest.fn} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
