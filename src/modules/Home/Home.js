import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from './Home.actions';
import GuitarsList from './GuitarsList';

class Home extends React.Component {
/*  constructor(props) {
    super(props);
  } */
  render() {
    return (
      <div className="home">
        <div><GuitarsList guitars= {this.props.guitars}/></div>
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
