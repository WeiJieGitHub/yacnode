import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSideBar } from 'components/SideBar/SideBarRedux';
import StoreCacheManager from 'components/StoreCacheManager/StoreCacheManager';
import { push, pop, saveToLocal } from 'components/StoreCacheManager/StoreCacheManagerRedux';
import TopicsView from 'views/Topics/Topics';
import ArticleView from 'views/Article/Article';
import Header from 'layouts/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { fetchTopics } from 'views/Topics/TopicsRedux';
import {
  getHomeTopics,
  getGoodTopics,
  getAskTopics,
  getJobTopics,
  getShareTopics,
} from 'utils/request';

import 'styles/index.scss';

const Frame = (frameProps) => {
  const { sideBarOpen } = frameProps.sidebar;
  const { closeSidebar, fetchData } = frameProps;

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
                <Route
                  path={match.path}
                  render={props =>
                    <TopicsView
                      fetchTopics={fetchData}
                      request={getGoodTopics}
                      {...props}
                    />
                  }
                />
              </Switch>
            )}
          />
          <Route
            path="/share"
            render={({ match }) => (
              <Switch>
                <Route path="/share/:id" component={ArticleView} />
                <Route
                  path={match.path}
                  render={props =>
                    <TopicsView
                      fetchTopics={fetchData}
                      request={getShareTopics}
                      {...props}
                    />
                  }
                />
              </Switch>
            )}
          />
          <Route
            path="/ask"
            render={({ match }) => (
              <Switch>
                <Route path="/ask/:id" component={ArticleView} />
                <Route
                  path={match.path}
                  render={props =>
                    <TopicsView
                      fetchTopics={fetchData}
                      request={getAskTopics}
                      {...props}
                    />
                  }
                />
              </Switch>
            )}
          />
          <Route
            path="/job"
            render={({ match }) => (
              <Switch>
                <Route path={`${match.path}/:id`} component={ArticleView} />
                <Route
                  path={match.path}
                  render={props =>
                    <TopicsView
                      fetchTopics={fetchData}
                      request={getJobTopics}
                      {...props}
                    />
                  }
                />
              </Switch>
            )}
          />
          <Route
            path="/home"
            render={({ match }) => (
              <Switch>
                <Route path="/home/:id" component={ArticleView} />
                <Route
                  path={match.path}
                  render={props =>
                    <TopicsView
                      fetchTopics={fetchData}
                      request={getHomeTopics}
                      {...props}
                    />
                  }
                />
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
};

Frame.propTypes = {
  sidebar: PropTypes.shape({
    openSidebar: PropTypes.string.bool,
    sideBarOpen: PropTypes.bool,
  }),
  closeSidebar: PropTypes.func,
  fetchData: PropTypes.func,
};

Frame.defaultProps = {
  sidebar: {
    openSidebar: false,
  },
  closeSidebar: () => null,
  fetchData: () => null,
};

export default withRouter(connect(
  state => ({ sidebar: state.sidebar }),
  dispatch => ({
    closeSidebar: bindActionCreators(closeSideBar, dispatch),
    historyCachePush: bindActionCreators(push, dispatch),
    historyCachePop: bindActionCreators(pop, dispatch),
    saveHistoryCacheToLocal: bindActionCreators(saveToLocal, dispatch),
    fetchData: bindActionCreators(fetchTopics, dispatch),
  }),
)(StoreCacheManager(Frame)));
