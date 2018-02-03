import * as types from '../actionTypes';

const select = ({ name, value }) => ({
  type: types.PRODUCTS_FORM_SELECT,
  payload: { name, value },
});

export default select;
