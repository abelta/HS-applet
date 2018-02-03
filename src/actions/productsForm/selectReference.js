import * as types from '../actionTypes';

const selectReference = ({ reference }) => ({
  type: types.PRODUCTS_FORM_SELECT,
  payload: { reference },
});

export default selectReference;
