import * as types from '../actionTypes';

const removeProduct = ({ product }) => ({ type: types.PRODUCTS_REMOVE, payload: { product } });

export default removeProduct;
