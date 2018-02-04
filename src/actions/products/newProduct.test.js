import { expect } from 'chai';
import * as types from '../actionTypes';
import newProduct from './newProduct';

describe('newProduct', () => {
  const action = newProduct();

  describe('returns an action', () => {
    it('has type PRODUCTS_NEW', () => {
      expect(action.type).to.eql(types.PRODUCTS_NEW);
    });
  });
});
