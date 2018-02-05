import React from 'react';
import renderer from 'react-test-renderer';
import AcceptButton from './AcceptButton';

describe('AcceptButton', () => {
  const tree = renderer.create(<AcceptButton onClick={jest.fn} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
