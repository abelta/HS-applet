import { expect } from 'chai';
import * as types from '../actionTypes';
import selectReference from './selectReference';

describe('selectReference', () => {
  const reference = 'reference';
  const action = selectReference({ reference });

  describe('type', () => {
    it('has type PRODUCTS_FORM_SELECT_REFERENCE', () => {
      expect(action.type).to.eql(types.PRODUCTS_FORM_SELECT_REFERENCE);
    });
  });

  describe('payload', () => {
    it('has reference passed in as parameter', () => {
      expect(action.payload.reference).to.eql(reference);
    });
  });
});
