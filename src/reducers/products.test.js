import { expect } from 'chai';
import { createProduct, updateProduct, removeProduct } from '../actions/products';
import productsReducer from './products';

describe('productsReducer', () => {
  const state = [{ value: 'id0', name: 'name0' }, { value: 'id1', name: 'name1' }];

  describe('receives PRODUCTS_CREATE', () => {
    const product = { value: 'id-new', name: 'name-new' };
    const action = createProduct({ product });
    const reduced = productsReducer(state, action);

    it('includes the new product', () => {
      expect(reduced).to.include(product);
    });
  });

  describe('receives PRODUCTS_UPDATE', () => {
    const product = { value: 'id-mod', name: 'name-mod' };
    const action = updateProduct({ oldValue: 'id0', product });
    const reduced = productsReducer(state, action);

    it('has updated the selected product', () => {
      expect(reduced[0]).to.equal(product);
    });
  });

  describe('receives PRODUCTS_REMOVE', () => {
    const product = { value: 'id0', name: 'name0' };
    const action = removeProduct({ product });
    const reduced = productsReducer(state, action);

    it('has removed the selected product', () => {
      expect(reduced).to.not.include(product);
    });
  });

  describe('receives a different action', () => {
    const action = { type: 'DIFFERENT' };
    const reduced = productsReducer(state, action);

    it('returns the sent state', () => {
      expect(reduced).to.eql(state);
    });
  });
});
