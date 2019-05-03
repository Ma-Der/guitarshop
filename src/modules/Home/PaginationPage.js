import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginationPage = (props) => {
  return (
    <React.Fragment>
      {(() => {
        let path = [];
        path.push(props.currentPage);
        let show;
        if(props.leftArrow !== undefined) {
          show = () => <i className="fas fa-arrow-left"></i>;
        }
        else if(props.rightArrow !== undefined) {
          show = () => <i className="fas fa-arrow-right"></i>;
        }
        else show = () => props.currentPage;

        return (
          <NavLink to={{pathname: `/pag/` + path.join("/")}} className="pagination-link" activeClassName="active">{show()}</NavLink>
        );
      })()
      }
    </React.Fragment>
  );
}

export default PaginationPage;
