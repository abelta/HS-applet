import { expect } from 'chai';
import { randomReferences } from '../helpers';
import referencesReducer from './references';

describe('referencesReducer', () => {
  const state = [randomReferences(5), randomReferences(5), randomReferences(5)];

  describe('receives any action', () => {
    const action = { type: 'ANY_ACTION' };
    const reduced = referencesReducer(state, action);

    it('returns the state sent', () => {
      expect(reduced).to.eql(state);
    });
  });
});
