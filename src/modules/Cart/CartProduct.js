import React from 'react';

const CartProduct = (props) => {
  return (
    <div className="container cart-product">
      <div className="row">
        <div className="col-4 cart-product-image">
          <img src={props.product.miniature} alt={props.product.title}/>
        </div>
        <div className="col-4 cart-product-title">
          {props.product.title}
        </div>
        <div className="col-2">
          <button onClick={() => props.productAmount(props.product.id, props.guitarAmount - 1)}>-</button>
          <input
            type="number"
            min="1"
            max="99"
            value={props.guitarAmount}
            onChange={(e) => props.productAmount(props.product.id, Number(e.target.value))}
          />
          <button onClick={() => props.productAmount(props.product.id, props.guitarAmount + 1)}>+</button>
          <button onClick={() => props.removeFromCart(props.product.id)}>DELETE</button>
        </div>
        <div className="col-2">
          {(props.product.price).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
