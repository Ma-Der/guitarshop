import React from 'react';
import { connect } from 'react-redux';
import { getGuitar } from '../Home/Home.actions';
import Product from './Product';
import { addToCart } from '../Cart/Cart.actions';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.pickedGuitar);
  }

  componentDidMount() {
    console.log(this.props.match.params.guitarId);
    this.props.getGuitar(parseInt(this.props.match.params.guitarId));
  }

  addProductToCart = product => {
    this.props.addToCart(product);
    this.props.history.push('/cart');
  }
  render() {
    return (
      <Product pickedGuitar={this.props.pickedGuitar} addProductToCart={this.addProductToCart} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    pickedGuitar: store.HomeReducer.pickedGuitar
  };
}

const mapDispatchToProps = {
  getGuitar,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
