import React from 'react';
import SumProduct from './SumProduct';


const Summary = (props) => {
  console.log(props.products);
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">You picked:</div>
          <div className="col-2">Amount:</div>
          <div className="col-2">Price:</div>
        </div>
          {props.products.map(item => <SumProduct
                                        key={item.guitar.id}
                                        title={item.guitar.title}
                                        image={item.guitar.miniature}
                                        price={item.guitarsPrice}
                                        amount={item.guitarAmount}
                                      />
          )}

        <div>Total Price: {(props.summary.totalPrice).toFixed(2)}</div>
      </div>
    );

}

export default Summary;
