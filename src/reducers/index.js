import { combineReducers } from 'redux';
import productsList from './productsList';
import productsForm from './productsForm';
import references from './references';

const reducer = combineReducers({
  productsForm,
  productsList,
  references,
});

export default reducer;
