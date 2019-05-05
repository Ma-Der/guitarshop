export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PRODUCT_AMOUNT = 'PRODUCT_AMOUNT';
export const RESET_CART = 'RESET_CART';
export const GET_CART = 'GET_CART';
export const ADD_DISCOUNT = 'ADD_DISCOUNT';

export function getCart() {
  return {
    type: GET_CART,
  }
}

export function addToCart(guitar) {
  return {
    type: ADD_TO_CART,
    guitar
  }
}

export function removeFromCart(guitarId) {
  return {
    type: REMOVE_FROM_CART,
    guitarId
  }
}

export function productAmount(guitarId, i) {
  return {
    type: PRODUCT_AMOUNT,
    guitarId,
    i
  }
}


export function resetCart() {
  return {
    type: RESET_CART
  }
}

/*export function addDiscount(discountCode) {
  type: ADD_DISCOUNT,
  discountCode
}
*/
