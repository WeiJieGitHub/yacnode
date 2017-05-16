import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import routerMap from 'routes/routerMap';
import styles from './SideBarItems.scss';

class SideBarItems extends Component {
  handleItemClick(e) {
    this.props.handleItemClick();
    e.stopPropagation();
  }

  render() {
    const items = Object.keys(routerMap).map(key => (
      <NavLink
        exact={key === '/'}
        to={key}
        styleName="item"
        activeClassName={styles['item--active']}
        key={key}
        onClick={(e) => { this.handleItemClick(e); }}
        onTouchEnd={(e) => { this.handleItemClick(e); }}
      >
        { routerMap[key].title }
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
