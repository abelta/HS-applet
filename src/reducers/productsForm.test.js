import { expect } from 'chai';
import { closeModal, createProduct, editProduct, newProduct, updateProduct } from '../actions/products';
import { selectReference, setSegment } from '../actions/productsForm';
import productsFormReducer, { initialState } from './productsForm';

describe('productsFormReducer', () => {
  const state = initialState;

  describe('receives PRODUCTS_NEW', () => {
    const action = newProduct();
    const reduced = productsFormReducer(state, action);

    it('sets formIsOpen to true', () => {
      expect(reduced.formIsOpen).to.be.true;
    });
  });

  describe('receives PRODUCTS_CREATE', () => {
    const product = { name: 'name', value: 'value' };
    const action = createProduct({ product });
    const reduced = productsFormReducer(state, action);

    it('sets formIsOpen to false', () => {
      expect(reduced.formIsOpen).to.be.false;
    });
  });

  describe('receives PRODUCTS_EDIT', () => {
    const product = { name: 'name1 name2 name3', value: '001122' };
    const action = editProduct({ product });
    const reduced = productsFormReducer(state, action);

    it('sets formIsValid to true', () => {
      expect(reduced.formIsValid).to.be.true;
    });

    it('sets formIsOpen to true', () => {
      expect(reduced.formIsOpen).to.be.true;
    });

    it('sets product to the one passed in', () => {
      expect(reduced.product).to.eql(product);
    });

    it('sets selectedName to an array from the product passed in', () => {
      expect(reduced.selectedName).to.eql(['name1', 'name2', 'name3']);
    });

    it('sets selectedValue to an array from the product passed in', () => {
      expect(reduced.selectedValue).to.eql(['00', '11', '22']);
    });
  });

  describe('receives PRODUCTS_UPDATE', () => {
    const oldValue = 'oldValue';
    const product = { name: 'name', value: 'value' };
    const action = updateProduct({ oldValue, product });
    const reduced = productsFormReducer(state, action);

    it('sets formIsOpen to false', () => {
      expect(reduced.formIsOpen).to.be.false;
    });
  });

  describe('receives PRODUCTS_MODAL_CLOSE', () => {
    const action = closeModal();
    const reduced = productsFormReducer(state, action);

    it('sets formIsOpen to false', () => {
      expect(reduced.formIsOpen).to.be.false;
    });
  });

  describe('receives PRODUCTS_FORM_SET_SEGMENT', () => {
    const segment = 1;
    const action = setSegment({ segment });
    const reduced = productsFormReducer(state, action);

    it('sets the selected segment to the one passed in', () => {
      expect(reduced.selectedSegment).to.eql(segment);
    });
  });

  describe('receives PRODUCTS_FORM_SELECT_REFERENCE', () => {
    const reference = { id: '44', name: 'name' };
    const action = selectReference({ reference });
    const reduced = productsFormReducer(state, action);

    it('sets selectedName accordingly', () => {
      expect(reduced.selectedName).to.eql(['name', null, null]);
    });

    it('sets selectedValue accordingly', () => {
      expect(reduced.selectedValue).to.eql(['44', null, null]);
    });

    describe('all segments in selectedValue are set', () => {
      // eslint-disable-next-line no-shadow
      const reduced = productsFormReducer({ ...state, selectedValue: ['11', '22', '33'] }, action);
      it('sets formIsValid to true', () => {
        expect(reduced.formIsValid).to.be.true;
      });
    });

    describe('not all segments are set', () => {
      it('sets formIsValid to false', () => {
        expect(reduced.formIsValid).to.be.false;
      });
    });

    describe('selected segment is 2', () => {
      // eslint-disable-next-line no-shadow
      const reduced = productsFormReducer({ ...state, selectedSegment: 2 }, action);
      it('sets selectedSegment to 2', () => {
        expect(reduced.selectedSegment).to.eql(2);
      });
    });

    describe('selected segment is 0', () => {
      it('sets selectedSegment to 1', () => {
        expect(reduced.selectedSegment).to.eql(1);
      });
    });
  });

  describe('receives a different action', () => {
    const action = { type: 'SOMETHING_DIFFERENT' };
    const reduced = productsFormReducer(state, action);

    it('returns state passed in', () => {
      expect(reduced).to.eql(state);
    });
  });
});
