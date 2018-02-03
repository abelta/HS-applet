import { combineReducers } from 'redux';
import products from './products';
import productsForm from './productsForm';
import references from './references';

const reducer = combineReducers({
  products,
  productsForm,
  references,
});

export default reducer;
