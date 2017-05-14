import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from 'views/Home';
import GoodView from 'views/Good';
import ShareView from 'views/Share';
import AskView from 'views/Ask';
import JobView from 'views/Job';
import Header from 'layouts/Header';
import SideBar from 'components/SideBar';

import 'styles/index.scss';

function Frame() {
  return (
    <div>
      <SideBar />
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Frame.defaultProps = {
  children: null,
};

export default Frame;
