import * as types from '../actions/actionTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_CREATE: {
      const { product } = action.payload;
      return [...state, product];
    }
    case types.PRODUCTS_UPDATE: {
      const { oldValue, product } = action.payload;
      const products = [...state];
      const i = products.findIndex(p => p.value === oldValue);
      return [...products.slice(0, i), product, ...products.slice(i + 1)]; // Substitutes
    }
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
