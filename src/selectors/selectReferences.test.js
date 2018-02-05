import { expect } from 'chai';
import selectReferences from './selectReferences';

describe('selectReferences', () => {
  const references0 = [{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }];
  const references1 = [{ id: '3', name: 'name3' }, { id: '4', name: 'name4' }];
  const selectedSegment = 1;
  const state = {
    references: [references0, references1],
    productsForm: { selectedSegment },
  };
  const selection = selectReferences(state);

  it('returns the available references for the selected segment', () => {
    expect(selection).to.eql(references1);
  });
});
