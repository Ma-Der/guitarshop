import React from 'react';
import CartProduct from './CartProduct';

const CartList = (props) => {
  return (
    <div className="container">
      <div className="row cart-list">
        <div className="col-8 col-xl-8 col-lg-6 col-md-6 col-sm-4 col-mic-4 cart-product">Item</div>
        <div className="col-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-mic-4 cart-product-amount">Amount</div>
        <div className="col-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-mic-4 cart-product-price">Item Price</div>
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
      <div className="cart-summary-wrapper">
        <button className="cart-summary" onClick={props.toggle}>Summary</button>
      </div>
    </div>
  );
}

export default CartList;
