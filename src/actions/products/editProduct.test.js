import { expect } from 'chai';
import * as types from '../actionTypes';
import editProduct from './editProduct';

describe('editProduct', () => {
  const product = { name: 'name', value: 'value' };
  const action = editProduct({ product });

  describe('returns an action', () => {
    it('has type PRODUCTS_EDIT', () => {
      expect(action.type).to.eql(types.PRODUCTS_EDIT);
    });

    describe('payload', () => {
      it('has product passed in as parameter', () => {
        expect(action.payload.product).to.eql(product);
      });
    });
  });
});
