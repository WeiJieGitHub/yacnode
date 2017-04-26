import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import HomeView from 'views/home/Home';
import Header from 'layouts/header/Header';

function Frame() {
  return (
    <div>
      <Header />
      <div>
        <Route component={HomeView} />
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
