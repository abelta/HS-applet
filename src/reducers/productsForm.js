import * as types from '../actions/actionTypes';

const initialState = {
  formIsValid: false,
  product: null,
  selectedName: [],
  selectedSegment: 0,
  selectedValue: [],
};

const productsForm = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_NEW:
      return initialState;
    case types.PRODUCTS_CREATE:
      return initialState;
    case types.PRODUCTS_EDIT: {
      const { product } = action.payload;
      return {
        ...state,
        product,
        formIsValid: true,
        selectedName: product.name.split(' '),
        selectedValue: product.value.match(/.{2}/g),
      };
    }
    case types.PRODUCTS_UPDATE:
      return initialState;
    case types.PRODUCTS_MODAL_CLOSE:
      return initialState;
    case types.PRODUCTS_FORM_SET_SEGMENT: {
      const { segment } = action.payload;
      return { ...state, selectedSegment: segment };
    }
    default:
      return state;
  }
};

export default productsForm;
