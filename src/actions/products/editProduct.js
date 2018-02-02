import * as types from '../actionTypes';

const editProduct = ({ id }) => ({ type: types.PRODUCTS_EDIT, payload: { id } });

export default editProduct;
