import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from './Cart.actions';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import Summary from './Summary';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getCart();
  }

  multiple = () => {
    this.toggle();
    this.props.resetCart();
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  removeFromCart = productId => {
    this.props.removeFromCart(productId);
  }

  productAmount = (productId, value) => {
    this.props.productAmount(productId, value);
  }

  render() {
    console.log(this.props.cartGuitars);
    return (
      <div className="container">
        <h1 className="component-title">Basket</h1>
        {this.props.cartGuitars.length === 0 ?
          <div>
          <h3>Basket is empty.</h3>
            <Link to="/" className="cart-container-back-shopping"><h4>Go back to shopping</h4></Link>
          </div>
            :
            <CartList toggle={this.toggle} products={this.props.cartGuitars} removeProductFromCart={this.removeFromCart} productAmount={this.productAmount} />
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-sum">
          <ModalHeader id="modal-head" toggle={this.toggle}>Summary</ModalHeader>
          <ModalBody><Summary summary={this.props.summary} products={this.props.cartGuitars}/></ModalBody>
          <ModalFooter className="modal-footer">
            <button onClick={this.multiple}>BUY</button>
            <button onClick={this.toggle}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = function(store) {
  return {
    cartGuitars: store.CartReducer.cartGuitars,
    summary: store.CartReducer.summary
  };
};

const mapDispatchToProps = {
  ...cartActions
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
