import * as types from '../actionTypes';

const editProduct = ({ value }) => ({ type: types.PRODUCTS_EDIT, payload: { value } });

export default editProduct;
