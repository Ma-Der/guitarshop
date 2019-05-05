import React from 'react';

const CartProduct = (props) => {
  return (
    <div className="container cart-product">
      <div className="row">
        <div className="col-8 cart-product-image">
          <img src={props.product.miniature} alt={props.product.title}/>
          <div className="cart-product-title">
            {props.product.title}
          </div>
        </div>

        <div className="col-2 amount-wrapper">
          <button className="cart-product-button" onClick={() => props.productAmount(props.product.id, props.guitarAmount - 1)}>-</button>
          <input
            className="cart-product-input"
            type="number"
            min="1"
            max="99"
            value={props.guitarAmount}
            onChange={(e) => props.productAmount(props.product.id, Number(e.target.value))}
          />
          <button className="cart-product-button" onClick={() => props.productAmount(props.product.id, props.guitarAmount + 1)}>+</button>
          <button className="cart-product-delete-button" onClick={() => props.removeFromCart(props.product.id)}>DELETE ITEM</button>
        </div>
        <div className="col-2 cart-item-price">
          <p>{(props.product.price).toFixed(2)} zł</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
