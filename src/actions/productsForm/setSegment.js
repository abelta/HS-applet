import * as types from '../actionTypes';

const setSegment = ({ segment }) => ({
  type: types.PRODUCTS_FORM_SET_SEGMENT,
  payload: { segment },
});

export default setSegment;
