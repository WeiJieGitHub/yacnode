import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSideBar } from 'components/SideBar/SideBarRedux';
import { push, pop } from 'reduxConf/historyReducer';

import HomeView from 'views/Home/Home';
import GoodView from 'views/Good/Good';
import ShareView from 'views/Share/Share';
import AskView from 'views/Ask/Ask';
import JobView from 'views/Job/Job';
import ArticleView from 'views/Article/Article';
import Header from 'layouts/Header/Header';
import SideBar from 'components/SideBar/SideBar';

import 'styles/index.scss';

class Frame extends Component {
  componentDidMount() {
    const { historyPush, historyPop, history } = this.props;
    let prevKey = `${history.location.pathname}${history.location.search}`;
    historyPush(prevKey);
    history.listen((location, action) => {
      const currentKey = `${location.pathname}${location.search}`;
      switch (action) {
        case 'PUSH':
          historyPush(prevKey);
          prevKey = currentKey;
          break;
        case 'POP':
          historyPush(prevKey);
          historyPop(currentKey);
          prevKey = currentKey;
          break;
        default:
          break;
      }
    });
  }

  render() {
    const { sideBarOpen } = this.props.sidebar;
    const { closeSidebar } = this.props;
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
              path="/home"
              render={({ match }) => (
                <Switch>
                  <Route path="/home/:id" component={ArticleView} />
                  <Route path={match.path} component={HomeView} />
                </Switch>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Redirect to="/home" />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Frame.propTypes = {
  sidebar: PropTypes.shape({
    openSidebar: PropTypes.string.bool,
    sideBarOpen: PropTypes.bool,
  }),
  closeSidebar: PropTypes.func,
  history: PropTypes.shape({
    action: PropTypes.string,
    listen: PropTypes.func,
  }),
  historyPush: PropTypes.func,
  historyPop: PropTypes.func,
};

Frame.defaultProps = {
  sidebar: {
    openSidebar: false,
  },
  closeSidebar: () => null,
  historyPush: () => null,
  historyPop: () => null,
  history: {},
};

export default withRouter(connect(
  state => ({ sidebar: state.sidebar }),
  dispatch => ({
    closeSidebar: bindActionCreators(closeSideBar, dispatch),
    historyPush: bindActionCreators(push, dispatch),
    historyPop: bindActionCreators(pop, dispatch),
  }),
)(Frame));
