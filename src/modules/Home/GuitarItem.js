import React from 'react';
import { Link } from 'react-router-dom';


const GuitarItem = ({guitar}) => {
  return (
    <div className="guitar">
      {guitar.tag !== "" ? <div className="flag"><p className="flag-item">{guitar.tag}</p></div> : null }
      <Link to={'/product/' + guitar.id} className="guitar-container">
        <img className="guitar-image" src={guitar.image} alt={guitar.title}/>
      </Link>
      <h3>{guitar.title}</h3>
      <h4 className="guitar-price">Price: <span>{guitar.price}</span> zł</h4>
    </div>
  );
}

export default GuitarItem;
