import * as types from '../actionTypes';

const selectReference = ({ name, value }) => ({
  type: types.PRODUCTS_FORM_SELECT,
  payload: { name, value },
});

export default selectReference;
