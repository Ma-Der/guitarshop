import { combineReducers } from 'redux';
import HomeReducer from './modules/Home/Home.reducer';

const reducer = combineReducers({
  HomeReducer,
});

export default reducer;
