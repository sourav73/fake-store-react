import { combineReducers } from 'redux';
import { cartReducer, productReducer, selectedProductReducer } from './productReducers';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer
});

export default reducers;