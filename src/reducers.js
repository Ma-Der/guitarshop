import { combineReducers } from 'redux';
import HomeReducer from './modules/Home/Home.reducer';
import CartReducer from './modules/Cart/Cart.reducer';

const reducer = combineReducers({
  HomeReducer,
  CartReducer
});

export default reducer;
