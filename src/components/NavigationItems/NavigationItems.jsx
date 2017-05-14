import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import routerMap from 'routes/routerMap';
import styles from './NavigationItems.scss';

function NavigationItems() {
  const items = Object.keys(routerMap).map(key => (
    <NavLink
      exact={key === '/'}
      to={key}
      styleName="item"
      activeClassName={styles['item--active']}
      key={key}
    >
      { routerMap[key] }
    </NavLink>
  ));

  return (
    <span styleName="wrapper">
      { items }
    </span>
  );
}

export default CSSModules(NavigationItems, styles);
