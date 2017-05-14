import React from 'react';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import Contarner from 'components/Container';
import NavigationItems from 'components/NavigationItems';
import Logo from 'components/Logo';
import styles from './Navigation.scss';

function Navigation() {
  return (
    <nav styleName="wrapper" data-role="nav">
      <Contarner styleName="body">
        <i styleName="menu" className={icons['icon-menu']} />
        <Logo />
        <NavigationItems />
      </Contarner>
    </nav>
  );
}

export default CSSModules(Navigation, styles);
