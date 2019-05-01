import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from './Home.actions';
import GuitarsList from './GuitarsList';
import Sort from './Sort';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home row">
        <Sort className="col-6"></Sort>
        <GuitarsList guitars= {this.props.guitars} className="col-6"/>
      </div>
    );
  }

}


const mapStateToProps = function(store) {
  return {
    guitars: store.HomeReducer.guitars
  };
}
export default connect(mapStateToProps)(Home);
