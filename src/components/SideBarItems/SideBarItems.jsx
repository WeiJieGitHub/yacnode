import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import routes from 'routes/routerMap';
import styles from './SideBarItems.scss';

class SideBarItems extends Component {
  handleItemClick(e) {
    this.props.handleItemClick();
    e.stopPropagation();
  }

  render() {
    const items = routes.map(route => (
      <NavLink
        exact={route.path === '/'}
        to={route.path}
        styleName="item"
        activeClassName={styles['item--active']}
        key={route.path}
        onClick={(e) => { this.handleItemClick(e); }}
        onTouchEnd={(e) => { this.handleItemClick(e); }}
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
}

SideBarItems.propTypes = {
  handleItemClick: PropTypes.func,
};

SideBarItems.defaultProps = {
  handleItemClick: () => null,
};

export default CSSModules(SideBarItems, styles);
