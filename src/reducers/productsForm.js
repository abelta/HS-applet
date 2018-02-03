import * as types from '../actions/actionTypes';

const initialState = {
  formIsOpen: false,
  formIsValid: false,
  product: null,
  selectedName: [null, null, null],
  selectedSegment: 0,
  selectedValue: [null, null, null],
};

const productsForm = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_NEW:
      return { ...initialState, formIsOpen: true };
    case types.PRODUCTS_CREATE:
      return { ...initialState, formIsOpen: false };
    case types.PRODUCTS_EDIT: {
      const { product } = action.payload;
      return {
        ...initialState,
        product,
        formIsValid: true,
        formIsOpen: true,
        selectedName: product.name.split(' '),
        selectedValue: product.value.match(/.{2}/g),
      };
    }
    case types.PRODUCTS_UPDATE:
      return { ...state, formIsOpen: false };
    case types.PRODUCTS_MODAL_CLOSE:
      return { ...state, formIsOpen: false };
    case types.PRODUCTS_FORM_SET_SEGMENT: {
      const { segment } = action.payload;
      return { ...state, selectedSegment: segment };
    }
    case types.PRODUCTS_FORM_SELECT_REFERENCE: {
      const { reference } = action.payload;
      const selectedName = [...state.selectedName];
      const selectedValue = [...state.selectedValue];
      selectedName[state.selectedSegment] = reference.name;
      selectedValue[state.selectedSegment] = reference.id;
      const formIsValid = selectedValue.every(value => !!value);
      const selectedSegment = state.selectedSegment < 2 ? state.selectedSegment + 1 : state.selectedSegment;
      return { ...state, formIsValid, selectedSegment, selectedName, selectedValue };
    }
    default:
      return state;
  }
};

export default productsForm;
