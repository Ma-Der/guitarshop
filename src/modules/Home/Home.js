import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as homeActions from './Home.actions';
import GuitarsList from './GuitarsList';
import Sort from './Sort';
import Pagination from './Pagination';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getGuitars(this.props.match.params.by, this.props.match.params.direction, this.props.match.params.currentPage !== undefined ? parseInt(this.props.match.params.currentPage) - 1 : undefined);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.props.getGuitars(this.props.match.params.by, this.props.match.params.direction, this.props.match.params.currentPage !== undefined ? parseInt(this.props.match.params.currentPage) - 1 : undefined);
    }
  }

  sort = (sortBy, direction) => {
    this.props.getGuitars(sortBy, direction);
  }

  render() {
    return (
      <div className="home row">
        <div className="col-2 home-sort">
          <Sort sort={this.sort}/>
        </div>
        <div className="col-10 guitars-list">
          <GuitarsList guitars= {this.props.guitars} />
          <Pagination pages={this.props.pages} currentPage={this.props.currentPage} sort={this.props.sort}/>
        </div>
      </div>
    );
  }

}


const mapStateToProps = function(store) {
  return {
    guitars: store.HomeReducer.guitars,
    pages: store.HomeReducer.pages,
    currentPage: store.HomeReducer.currentPage,
    sort: store.HomeReducer.sort
  };
}

const mapDispatchToProps = {
  ...homeActions
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
