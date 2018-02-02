import * as types from '../actions/actionTypes';

const initialState = {
  formIsValid: false,
  product: null,
  selectedName: '',
  selectedValue: '',
};

const productsForm = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_NEW:
      return initialState;
    case types.PRODUCTS_CREATE:
      return initialState;
    case types.PRODUCTS_EDIT: {
      const { product } = action.payload;
      return { ...state, product, formIsValid: true, selectedName: product.name, selectedValue: product.value };
    }
    case types.PRODUCTS_UPDATE:
      return initialState;
    case types.PRODUCTS_MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
};

export default productsForm;
