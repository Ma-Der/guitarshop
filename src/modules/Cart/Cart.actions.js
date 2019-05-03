export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PRODUCT_AMOUNT_PLUS = 'PRODUCT_AMOUNT_PLUS';
export const PRODUCT_AMOUNT_MINUS = 'PRODUCT_AMOUNT_MINUS';
export const RESET_CART = 'RESET_CART';

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

export function productAmountPlus(guitarId) {
  return {
    type: PRODUCT_AMOUNT_PLUS,
    guitarId
  }
}

export function productAmountMinus(guitarId) {
  return {
    type: PRODUCT_AMOUNT_MINUS,
    guitarId
  }
}

export function resetCart() {
  return {
    type: RESET_CART
  }
}
