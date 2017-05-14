import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import SideBarItems from 'components/SideBarItems';
import styles from './SideBar.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  close() {
    this.setState({
      open: false,
    });
  }

  open() {
    this.setState({
      open: true,
    });
  }

  handleCloseOperation(e) {
    this.close();
    e.preventDefault();
  }

  render() {
    const { open } = this.state;

    return (
      <nav className={styles.wrapper} styleName={open ? 'opening' : ''}>
        <div
          styleName="cross"
          onTouchEnd={(e) => { this.handleCloseOperation(e); }}
          onClick={(e) => { this.handleCloseOperation(e); }}
        >
          <i className={icons['icon-cross']} />
        </div>
        <SideBarItems />
      </nav>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
};

SideBar.defaultProps = {
  open: true,
};

export default CSSModules(SideBar, styles);
