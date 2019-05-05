import { ADD_TO_CART, REMOVE_FROM_CART, PRODUCT_AMOUNT, RESET_CART, GET_CART } from './Cart.actions';
import { changeAmount, countItemPrice, addNewItem, countSummary} from '../../data/CartFunctions';

const initialState = {
  cartGuitars: [],
  summary: {
    price: 0,
    totalPrice: 0
  }
}

const CartReducer = function(state = initialState, action) {
  switch(action.type) {

    case GET_CART:
      return {...state};

    case ADD_TO_CART:
      let freshState = {...state};
      let product = freshState.cartGuitars.find(el => el.guitar.id === action.guitar.id);
      if(product != null && product.guitar.id === action.guitar.id) {
        product = changeAmount(product, product.guitarAmount + 1);
        product = countItemPrice(product);
        const index = freshState.cartGuitars.findIndex(product => product.guitar.id === action.guitar.id);
        freshState.cartGuitars[index] = product;
      } else freshState = {...freshState, cartGuitars: addNewItem(freshState.cartGuitars, action.guitar)};
      return {...freshState, summary: countSummary(freshState.cartGuitars, freshState.summary)};

    case REMOVE_FROM_CART:
      state.cartGuitars = state.cartGuitars.filter(el => el.guitar.id !== action.guitarId);
      state.summary = countSummary(state.cartGuitars, state.summary);
      return {...state};

    case PRODUCT_AMOUNT:
      let newfreshState = {...state};
      if(action.i > 0 && action.i < 100) {
        let newAmountProducts = newfreshState.cartGuitars.concat();
        let newAmountSummary = newfreshState.summary;
        let product = newfreshState.cartGuitars.find(el => el.guitar.id === action.guitarId);
        const changedItem = changeAmount(product, action.i);
        const index = newAmountProducts.findIndex(product => product.guitar.id === action.guitarId);
        newfreshState.cartGuitars[index] = changedItem;
        newfreshState.summary = countSummary(newfreshState.cartGuitars, newAmountSummary);
      }
      return {...newfreshState};
    case RESET_CART:
      let restartState = {...state};
      restartState = {
        cartGuitars: [],
        summary: {
          price: 0,
          totalPrice: 0
        }
      }
      return {...restartState};

    default:
      return state;
  }
}

export default CartReducer;
