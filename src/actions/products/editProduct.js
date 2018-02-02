import * as types from '../actionTypes';

const editProduct = ({ product }) => ({ type: types.PRODUCTS_EDIT, payload: { product } });

export default editProduct;
