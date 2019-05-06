import React from 'react';
import { PRICE, TITLE, ASC, DESC } from '../../data/sortVariables';

const Sort = (props) => {
  return (
    <div className="sort-container">
      <h3>Sort:</h3>
      <div className="sort-option" onClick={() => props.sort(TITLE, ASC)}>Name A-Z</div>
      <div className="sort-option" onClick={() => props.sort(TITLE, DESC)}>Name Z-A</div>
      <div className="sort-option" onClick={() => props.sort(PRICE, ASC)}>Price: low to high</div>
      <div className="sort-option" onClick={() => props.sort(PRICE, DESC)}>Price: high to low</div>
    </div>
  );
}

export default Sort;
