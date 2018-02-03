import * as types from '../actionTypes';

const updateProduct = ({ oldValue, product }) => ({
  type: types.PRODUCTS_UPDATE,
  payload: { oldValue, product },
});

export default updateProduct;
