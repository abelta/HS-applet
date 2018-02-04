import { expect } from 'chai';
import * as types from '../actionTypes';
import updateProduct from './updateProduct';

describe('updateProduct', () => {
  const oldValue = 'oldValue';
  const product = { name: 'name', value: 'value' };
  const action = updateProduct({ oldValue, product });

  describe('type', () => {
    it('has type PRODUCTS_UPDATE', () => {
      expect(action.type).to.eql(types.PRODUCTS_UPDATE);
    });
  });

  describe('payload', () => {
    it('has oldValue passed in as parameter', () => {
      expect(action.payload.oldValue).to.eql(oldValue);
    });

    it('has product passed in as parameter', () => {
      expect(action.payload.product).to.eql(product);
    });
  });
});
