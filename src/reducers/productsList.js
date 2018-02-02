import * as types from '../actions/actionTypes';

const initialState = {
  products: [{ name: 'moco', value: '010908' }, { name: 'pedo', value: '949622' }, { name: 'caca', value: '343455' }],
  modalOpen: false,
};

const productsList = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_NEW:
      return { ...state, modalOpen: true };
    case types.PRODUCTS_EDIT:
      return { ...state, modalOpen: true };
    case types.PRODUCTS_REMOVE: {
      const { value } = action.payload;
      const i = state.products.findIndex(element => element.value === value);
      const products = [...state.products.slice(0, i), ...state.products.slice(i + 1)]; // Removes
      return { ...state, products };
    }
    default:
      return state;
  }
};

export default productsList;
