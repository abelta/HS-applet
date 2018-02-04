import { expect } from 'chai';
import * as types from '../actionTypes';
import createProduct from './createProduct';

describe('createProduct', () => {
  const product = { name: 'name', value: 'value' };
  const action = createProduct({ product });

  describe('returns an action', () => {
    it('has type PRODUCTS_CREATE', () => {
      expect(action.type).to.eql(types.PRODUCTS_CREATE);
    });

    describe('payload', () => {
      it('has product passed as parameter', () => {
        expect(action.payload.product).to.eql(product);
      });
    });
  });
});
