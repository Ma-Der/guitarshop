import React from 'react';
import GuitarItem from './GuitarItem';

const GuitarsList = ({guitars}) => {
  return (
    <div className="guitar-list">
      {guitars.map(guit => <GuitarItem guitar={guit} key={guit.id} />)}
    </div>
  );
}

export default GuitarsList;
