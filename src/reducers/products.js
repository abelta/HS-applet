import * as types from '../actions/actionTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_NEW:
      return [...state];
    case types.PRODUCTS_CREATE:
      return [...state];
    case types.PRODUCTS_EDIT:
      return [...state];
    case types.PRODUCTS_UPDATE:
      return [...state];
    case types.PRODUCTS_REMOVE: {
      const { product } = action.payload;
      const i = state.indexOf(product);
      const products = [...state.slice(0, i), ...state.slice(i + 1)]; // Removes
      return products;
    }
    default:
      return state;
  }
};

export default productsReducer;
