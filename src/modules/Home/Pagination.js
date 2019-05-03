import React from 'react';
import PaginationPage from './PaginationPage';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPagItem = () => {
    let pagItem = [];
    if(this.props.currentPage > 0) {
      pagItem.push(<PaginationPage key={-1} currentPage={1} pages={this.props.pages} leftArrow={true} />);
    }
    for(let i=0; i < this.props.pages; i++) {
      pagItem.push(<PaginationPage key={i} pages={this.props.pages} currentPage={i+1} />);
    }
    if(this.props.pages - 1 > this.props.currentPage) {
      pagItem.push(<PaginationPage key={this.props.pages + 1} pages={this.props.pages} currentPage={this.props.pages} rightArrow={true} />);
    }
    return pagItem;
  }

  render() {
    return (
      <div className="pagination">
        <ul>
          {this.renderPagItem()}
        </ul>
      </div>
    );
  }
}

export default Pagination;
