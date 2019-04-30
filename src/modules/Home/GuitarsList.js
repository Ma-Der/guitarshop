import React from 'react';
import GuitarItem from './GuitarItem';

const GuitarsList = ({guitars}) => {
  return (
    <div>
      {guitars.map(guit => <GuitarItem guitar={guit} key={guit.id}></GuitarItem>)}
    </div>
  );
}

export default GuitarsList;
