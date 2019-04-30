import React from 'react';


const GuitarItem = ({guitar}) => {
  return (
    <li>
      <img src={guitar.image} alt={guitar.title}/>
      <div>Cena: {guitar.price}</div>
    </li>
  );
}

export default GuitarItem;
