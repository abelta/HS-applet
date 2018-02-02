import * as types from '../actionTypes';

const removeProduct = ({ id }) => ({ type: types.PRODUCTS_REMOVE, payload: { id } });

export default removeProduct;
