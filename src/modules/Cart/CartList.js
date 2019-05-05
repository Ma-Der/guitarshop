import React from 'react';
import CartProduct from './CartProduct';

const CartList = (props) => {
  return (
    <div className="container">
      <div className="row cart-list">
        <div className="col-8">Item</div>
        <div className="col-2">Amount</div>
        <div className="col-2">Item Price</div>
      </div>
      {
        props.products.map(product => <CartProduct
                                        key={product.guitar.id}
                                        product={product.guitar}
                                        guitarAmount={product.guitarAmount}
                                        productPrice={product.guitarsPrice}
                                        oldProductPrice={product.oldGuitarsPrice}
                                        removeFromCart={props.removeProductFromCart}
                                        productAmount={props.productAmount}
                                      />)
      }
      <button onClick={props.toggle}>Summary</button>
    </div>
  );
}

export default CartList;
