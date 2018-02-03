import * as types from '../actionTypes';

const createProduct = ({ product }) => ({ type: types.PRODUCTS_CREATE, payload: { product } });

export default createProduct;
