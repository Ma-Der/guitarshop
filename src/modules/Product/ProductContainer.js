import React from 'react';
import { connect } from 'react-redux';
import { getGuitar } from '../Home/Home.actions';
import Product from './Product';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.pickedGuitar);
  }

  componentDidMount() {
    console.log(this.props.match.params.guitarId);
    this.props.getGuitar(parseInt(this.props.match.params.guitarId));
  }

  render() {
    return (
      <Product pickedGuitar={this.props.pickedGuitar} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
