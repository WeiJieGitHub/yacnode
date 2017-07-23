import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import routes from 'routes/routerMap';
import styles from './NavigationItems.scss';

function NavigationItems() {
  const items = routes.map(route => (
    <NavLink
      to={route.path}
      styleName="item"
      activeClassName={styles['item--active']}
      key={route.path}
    >
      { route.title }
    </NavLink>
  ));

  return (
    <span styleName="wrapper">
      { items }
    </span>
  );
}

export default CSSModules(NavigationItems, styles);
