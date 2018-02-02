import * as types from '../actionTypes';

const removeProduct = ({ value }) => ({ type: types.PRODUCTS_REMOVE, payload: { value } });

export default removeProduct;
