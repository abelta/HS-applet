import { expect } from 'chai';
import * as types from '../actionTypes';
import removeProduct from './removeProduct';

describe('removeProduct', () => {
  const product = { name: 'name', value: 'value' };
  const action = removeProduct({ product });

  describe('returns an action', () => {
    it('has type PRODUCTS_REMOVE', () => {
      expect(action.type).to.eql(types.PRODUCTS_REMOVE);
    });

    describe('payload', () => {
      it('has product passed in as parameter', () => {
        expect(action.payload.product).to.eql(product);
      });
    });
  });
});
