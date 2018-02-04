import { expect } from 'chai';
import * as types from '../actionTypes';
import closeModal from './closeModal';

describe('closeModal', () => {
  const action = closeModal();

  describe('returns an action', () => {
    it('has type PRODUCTS_MODAL_CLOSE', () => {
      expect(action.type).to.eql(types.PRODUCTS_MODAL_CLOSE);
    });
  });
});
