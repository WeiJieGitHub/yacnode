import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSideBar } from 'components/SideBar/SideBarRedux';

import HomeView from 'views/Home';
import GoodView from 'views/Good';
import ShareView from 'views/Share';
import AskView from 'views/Ask';
import JobView from 'views/Job';
import Header from 'layouts/Header';
import SideBar from 'components/SideBar';

import 'styles/index.scss';

function Frame(props) {
  const { sideBarOpen } = props.sidebar;
  const { closeSidebar } = props;
  return (
    <div>
      <SideBar
        open={sideBarOpen}
        handleCloseOperation={closeSidebar}
      />
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/good" component={GoodView} />
          <Route path="/share" component={ShareView} />
          <Route path="/ask" component={AskView} />
          <Route path="/job" component={JobView} />
        </Switch>
      </div>
    </div>
  );
}

Frame.propTypes = {
  sidebar: PropTypes.shape({
    openSidebar: PropTypes.string.bool,
  }),
  closeSidebar: PropTypes.func,
};

Frame.defaultProps = {
  sidebar: {
    openSidebar: false,
  },
  closeSidebar: () => null,
};

export default withRouter(connect(
  state => ({ sidebar: state.sidebar }),
  dispatch => ({ closeSidebar: bindActionCreators(closeSideBar, dispatch) }),
)(Frame));
