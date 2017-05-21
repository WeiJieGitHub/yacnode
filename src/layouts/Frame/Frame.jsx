import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSideBar } from 'components/SideBar/SideBarRedux';

import HomeView from 'views/Home/Home';
import GoodView from 'views/Good/Good';
import ShareView from 'views/Share/Share';
import AskView from 'views/Ask/Ask';
import JobView from 'views/Job/Job';
import ArticleView from 'views/Article/Article';
import Header from 'layouts/Header/Header';
import SideBar from 'components/SideBar/SideBar';

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
          <Route
            path="/good"
            render={({ match }) => (
              <Switch>
                <Route path="/good/:id" component={ArticleView} />
                <Route path={match.path} component={GoodView} />
              </Switch>
            )}
          />
          <Route
            path="/share"
            render={({ match }) => (
              <Switch>
                <Route path="/share/:id" component={ArticleView} />
                <Route path={match.path} component={ShareView} />
              </Switch>
            )}
          />
          <Route
            path="/ask"
            render={({ match }) => (
              <Switch>
                <Route path="/ask/:id" component={ArticleView} />
                <Route path={match.path} component={AskView} />
              </Switch>
            )}
          />
          <Route
            path="/job"
            render={({ match }) => (
              <Switch>
                <Route path={`${match.path}/:id`} component={ArticleView} />
                <Route path={match.path} component={JobView} />
              </Switch>
            )}
          />
          <Route
            path="/"
            render={({ match }) => (
              <Switch>
                <Route path="/:id" component={ArticleView} />
                <Route path={match.path} component={HomeView} />
              </Switch>
            )}
          />
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
