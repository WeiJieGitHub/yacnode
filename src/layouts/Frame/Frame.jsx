import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSideBar } from 'components/SideBar/SideBarRedux';
import StoreCacheManager from 'components/StoreCacheManager/StoreCacheManager';
import { push, pop, saveToLocal } from 'components/StoreCacheManager/StoreCacheManagerRedux';
import ArticleView from 'views/Article/Article';
import Header from 'layouts/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import routes from 'routes/routerMap';

import 'styles/index.scss';

const Frame = (props) => {
  const { sideBarOpen } = props.sidebar;
  const { closeSidebar } = props;
  return (
    <div>
      <SideBar
        open={sideBarOpen}
        handleCloseOperation={closeSidebar}
      />
      <Header />
      <Switch>
        {routes.map(route => (
          <Route
            path={route.path}
            key={route.path}
            render={({ match }) => (
              <Switch>
                <Route path={`${route.path}/:id`} component={ArticleView} />
                <Route
                  path={match.path}
                  render={subProps =>
                    <route.component {...subProps} />
                  }
                />
              </Switch>
            )}
          />
        ))}
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/home" />
          )}
        />
      </Switch>
    </div>
  );
};

Frame.propTypes = {
  sidebar: PropTypes.shape({
    openSidebar: PropTypes.string.bool,
    sideBarOpen: PropTypes.bool,
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
  dispatch => ({
    closeSidebar: bindActionCreators(closeSideBar, dispatch),
    historyCachePush: bindActionCreators(push, dispatch),
    historyCachePop: bindActionCreators(pop, dispatch),
    saveHistoryCacheToLocal: bindActionCreators(saveToLocal, dispatch),
  }),
)(StoreCacheManager(Frame)));
