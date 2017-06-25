import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import SideBarItems from 'components/SideBarItems/SideBarItems';
import styles from './SideBar.scss';

class SideBar extends Component {
  handleCloseOperation(e) {
    this.props.handleCloseOperation(e);
    e.stopPropagation();
  }

  render() {
    const { open, handleCloseOperation } = this.props;
    return (
      <nav className={styles.wrapper} styleName={open ? 'opening' : ''}>
        <div
          styleName="cross"
          onTouchEnd={(e) => { this.handleCloseOperation(e); }}
          onClick={(e) => { this.handleCloseOperation(e); }}
        >
          <i className={icons['icon-cross']} />
        </div>
        <SideBarItems handleItemClick={handleCloseOperation} />
      </nav>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
  handleCloseOperation: PropTypes.func,
};

SideBar.defaultProps = {
  open: false,
  handleCloseOperation: () => null,
};

export default CSSModules(SideBar, styles);
