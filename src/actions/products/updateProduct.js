import * as types from '../actionTypes';

const updateProduct = ({ oldValue, newName, newValue }) => ({
  type: types.PRODUCTS_UPDATE,
  payload: { oldValue, newName, newValue },
});

export default updateProduct;
