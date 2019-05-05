import React from 'react';

const SumProduct = (props) => {
  return (
    <div className="row">
      <div className="col-8">
        <img className="sum-image" src={props.image} alt={props.title} />
        {props.title}
      </div>
      <div className="col-2">
        {props.amount}
      </div>
      <div className="col-2">
        {(props.price).toFixed(2)} zł
      </div>
    </div>
  );
}

export default SumProduct;
