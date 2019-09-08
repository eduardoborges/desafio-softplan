/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '@reach/router';

interface Props {

}

const Navbar : React.FC<Props> = props => (

  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Desafio Softplan </Link>
      </div>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>


      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            <span>Personagens</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
