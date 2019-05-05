import React from 'react';
import SumProduct from './SumProduct';


const Summary = (props) => {
  console.log(props.products);
    return (
      <div className="container">
        <div className="row summary-title">
          <div className="col-8 summary-product-pick">You picked:</div>
          <div className="col-2 summary-product">Amount:</div>
          <div className="col-2 summary-product">Price:</div>
        </div>
          {props.products.map(item => <SumProduct
                                        key={item.guitar.id}
                                        title={item.guitar.title}
                                        image={item.guitar.miniature}
                                        price={item.guitarsPrice}
                                        amount={item.guitarAmount}
                                      />
          )}

        <div className="total-price">Total Price: {(props.summary.totalPrice).toFixed(2)} zł</div>
      </div>
    );

}

export default Summary;
