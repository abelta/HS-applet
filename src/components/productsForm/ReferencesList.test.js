import React from 'react';
import renderer from 'react-test-renderer';
import ReferencesList from './ReferencesList';

describe('ReferencesList', () => {
  const data = [{ id: '1', name: 'name' }, { id: '2', name: 'name' }];
  const tree = renderer.create(<ReferencesList data={data} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
