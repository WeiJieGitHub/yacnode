import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import logo from 'assets/pics/logo.svg';
import styles from './Logo.scss';

function Logo() {
  return (
    <NavLink to="/" activeClassName="" styleName="wrapper">
      <img src={logo} alt="cnode" />
    </NavLink>
  );
}

export default CSSModules(Logo, styles);
