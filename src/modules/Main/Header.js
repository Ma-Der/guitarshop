import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="name col-4">
          <Link to='/' className="title">GUITAR SHOP</Link>
        </div>
        <div className="menu col-8" >
          <NavLink exact to='/' activeClassName="active">HOME</NavLink>
          <NavLink to='/faq' activeClassName="active">FAQ</NavLink>
          <NavLink to='/regulations' activeClassName="active">REGULATIONS</NavLink>
          <NavLink to='/contact' activeClassName="active">CONTACT</NavLink>
          <NavLink to='/cart' activeClassName="active">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
