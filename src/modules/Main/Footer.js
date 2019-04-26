import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row footer">
        <div className="col-4 rights">
          <p>All rights reserved to MADER</p>
        </div>
        <div className="col-8 footer-menu">
          <NavLink exact to="/" activeClassName="active">HOME</NavLink>
          <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
          <NavLink to="/regulations" activeClassName="active">REGULATIONS</NavLink>
          <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
