import { combineReducers } from 'redux';
import productsList from './productsList';
import productsForm from './productsForm';

const reducer = combineReducers({
  productsForm,
  productsList,
});

export default reducer;
