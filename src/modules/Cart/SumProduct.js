import React from 'react';

const SumProduct = (props) => {
  return (
    <div className="row sum-product">
      <div className="col-8 sum-product-name">
        <img className="sum-image" src={props.image} alt={props.title} />
        <div className="sum-title"><p>{props.title}</p></div>
      </div>
      <div className="col-2 sum-product-data">
        <p>{props.amount}</p>
      </div>
      <div className="col-2 sum-product-data">
        <p>{(props.price).toFixed(2)} zł</p>
      </div>
    </div>
  );
}

export default SumProduct;
