import { combineReducers } from 'redux';
import productsList from './productsList';

const reducer = combineReducers({
  productsList,
});

export default reducer;
