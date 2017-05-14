import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import Contarner from 'components/Container/Container';
import NavigationItems from 'components/NavigationItems/NavigationItems';
import Logo from 'components/Logo/Logo';
import styles from './Navigation.scss';

class Navigation extends Component {
  handleMenuClick(e) {
    e.stopPropagation();
    this.props.handleMenuClick(e);
  }

  render() {
    return (
      <nav styleName="wrapper" data-role="nav">
        <Contarner styleName="body">
          <i
            styleName="menu"
            className={icons['icon-menu']}
            onClick={(e) => { this.handleMenuClick(e); }}
            onTouchEnd={(e) => { this.handleMenuClick(e); }}
          />
          <Logo />
          <NavigationItems />
        </Contarner>
      </nav>
    );
  }
}

Navigation.propTypes = {
  handleMenuClick: PropTypes.func,
};

Navigation.defaultProps = {
  handleMenuClick: () => undefined,
};

export default CSSModules(Navigation, styles);
