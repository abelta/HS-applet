import React from 'react';
import renderer from 'react-test-renderer';
import NewButton from './NewButton';

describe('NewButton', () => {
  const tree = renderer.create(<NewButton onClick={jest.fn} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
