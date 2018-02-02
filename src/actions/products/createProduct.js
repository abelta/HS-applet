import * as types from '../actionTypes';

const createProduct = ({ name, value }) => ({ type: types.PRODUCTS_CREATE, payload: { name, value } });

export default createProduct;
