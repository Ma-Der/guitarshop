import React from 'react';

const Product = ({pickedGuitar}) => {
  return (
    <div className="row">
      <div className="col-2">
        <img src={pickedGuitar.image} alt={pickedGuitar.title}/>
      </div>
      <div className="col-8 description">
        {pickedGuitar.tag !== "" ? <div className="flag"><p className="flag-item">{pickedGuitar.tag}</p></div> : null }
        <h3 className="product-title">{pickedGuitar.title}</h3>
        <ul className="product-list">
          <li>Body: {pickedGuitar.body}</li>
          <li>Top: {pickedGuitar.top}</li>
          <li>Fretboard: {pickedGuitar.fretboard}</li>
          <li>Neck: {pickedGuitar.neck}</li>
          <li>Scale: {pickedGuitar.scale} mm</li>
          <li>Frets: {pickedGuitar.frets}</li>
          <li>Nut Width: {pickedGuitar.nutWidth} mm</li>
          <li>Neck Profile: {pickedGuitar.neckProfile}</li>
          <li>Hardware: {pickedGuitar.hardware}</li>
          <li>Pickups: {pickedGuitar.pickups}</li>
          <li>Color: {pickedGuitar.color}</li>
        </ul>
      </div>
      <div className="col-2 product-buy">
        <h4 className="product-price">
          <div className="price-tag">Price:</div>
          {pickedGuitar.price} zł
        </h4>
        <button className="product-add"><h3>Add To Cart</h3></button>
      </div>
    </div>
  );
}

export default Product;
