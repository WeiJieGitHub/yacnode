import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { openSideBar } from 'components/SideBar/SideBarRedux';

function Header(props) {
  const { handleMenuClick } = props;
  return (
    <header>
      <Navigation handleMenuClick={handleMenuClick} />
    </header>
  );
}

Header.propTypes = {
  handleMenuClick: PropTypes.func,
};

Header.defaultProps = {
  handleMenuClick: () => undefined,
};

export default withRouter(connect(
  () => ({}),
  dispatch => ({ handleMenuClick: bindActionCreators(openSideBar, dispatch) }),
)(Header));
