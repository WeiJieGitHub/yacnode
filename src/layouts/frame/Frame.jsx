import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from 'views/home/Home';
import GoodView from 'views/good/Good';
import ShareView from 'views/share/Share';
import AskView from 'views/ask/Ask';
import JobView from 'views/job/Job';
import Header from 'layouts/header/Header';

function Frame() {
  return (
    <div>
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
