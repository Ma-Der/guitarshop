import React from 'react';

const Sort = (props) => {
  return (
    <div className="sort-container">
      <h3>Sort:</h3>
      <div className="sort-option">Name A-Z</div>
      <div className="sort-option">Name Z-A</div>
      <div className="sort-option">Price: low to high</div>
      <div className="sort-option">Price: high to low</div>
    </div>
  );
}

export default Sort;
