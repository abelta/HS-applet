import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Product';

describe('Product', () => {
  const tree = renderer.create(<Product name="name" order={1} value="value" />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
